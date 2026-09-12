---
name: cut-release
description: Release the swiperia packages to npm — version bump, changelog, PR, tag, publish. Use this whenever the user wants to ship, release, publish, cut a version, bump versions, or push a new version of swiperia-core / swiperia-js / swiperia-react to npm, and also when they ask why a release failed or how releasing works here. The order matters and parts of it are irreversible once published, so follow these steps rather than improvising a release.
---

# Cut a release

Versioning happens locally and lands on `main` through a pull request. Pushing the tag is what publishes — `.github/workflows/release.yml` triggers on `v*` and runs `nx release publish`.

This split exists because the branch ruleset on `main` requires pull requests and signed commits. CI therefore never pushes to a branch and holds `contents: read` only; npm auth comes from OIDC trusted publishing, so there is no token anywhere.

## 1. Preflight

```
git checkout main && git pull
git status --porcelain          # must be empty
gh run list --branch main --limit 1
```

Confirm the last release is tagged:

```
git tag --list | tail -3
```

`nx release` builds the changelog from commits since the most recent tag. A missing tag for the last published version silently widens the range and duplicates entries already in `CHANGELOG.md` — backfill it before continuing:

```
git tag vX.Y.Z <commit> && git push origin vX.Y.Z
```

Any `v*` tag push triggers the publish workflow, so first confirm the target commit predates `release.yml` (`git show <commit>:.github/workflows/release.yml`). If the file exists there, backfilling would publish whatever versions that commit's `package.json`s carry — create the tag locally without pushing instead, since only the changelog range needs it.

## 2. Version

```
git checkout -b release/next
pnpm nx release --skip-publish -d
```

`nx.json` already pins `release.git` to commit but not tag or push, so no flags are needed — `--git-tag` and `--git-push` belong to the `nx release version` subcommand and are rejected here.

`-d` previews. Read the output before dropping it:

- **Version** — all three packages move together (`projectsRelationship: fixed`). Conventional commits drive the bump: `fix:` → patch, `feat:` → minor, `BREAKING CHANGE:` → major.
- **Changelog** — covers only commits since the last tag.

Override the computed bump with a specifier when the commit types understate the change — a reshaped `exports` map, a dropped entry point, or a raised Node floor breaks consumers even if every commit said `fix:`:

```
pnpm nx release major --skip-publish
```

Rerun without `-d` once the numbers look right. This bumps the three `package.json`s, writes `CHANGELOG.md`, and commits locally.

## 3. Merge

```
git push -u origin release/next
gh pr create --base main --title "chore(release): vX.Y.Z" --body "..."
```

Merge through the GitHub UI — GitHub signs the merge commit, which is what satisfies the ruleset's signature requirement. Never bypass the ruleset to push the version commit directly.

## 4. Publish

```
git checkout main && git pull
git tag vX.Y.Z && git push origin vX.Y.Z
```

`X.Y.Z` must match the version now in `package.json`. The tag push triggers the workflow: lint, test, build, typecheck, then publint/attw, then publish.

```
gh run watch --exit-status
```

## 5. Verify

```
npm view swiperia-core version
npm view swiperia-js version
npm view swiperia-react version
```

All three report the new version, each with a provenance badge linking to the run.

## When publishing fails

- **npm auth / 404 on publish** — the trusted publisher on npmjs.com binds each package to `samavati/swiperia` **and the workflow filename** `release.yml`. Renaming or moving that file breaks publishing until all three configs are updated. Adding an `NPM_TOKEN` is not the fix; tokens lose publish rights in January 2027.
- **A publish rejected as stage-only** — the package's trusted publisher needs "Allow `npm publish`" ticked. `nx release publish` shells out to plain `pnpm publish`, which cannot stage.
- **Partial publish** — some packages live, some not. Fix forward: the tag already exists, so rerun the failed publish rather than retagging. `nx release publish` skips versions already on the registry.
- **Tag pushed at the wrong commit** — delete it (`git push origin :refs/tags/vX.Y.Z`) and retag, but only if nothing published. Once a version is on npm it cannot be reused.
