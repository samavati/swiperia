import { render as _render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { MouseEvents } from 'test-utils';
import SwipeArea from './SwipeArea';

const render = () => {
  const props = {
    onSwipeStart: vi.fn(),
    onSwipedDown: vi.fn(),
    onSwiped: vi.fn(),
    onSwipedLeft: vi.fn(),
    onSwipedRight: vi.fn(),
    onSwipedUp: vi.fn(),
    onSwiping: vi.fn(),
  };
  const ui = (
    <SwipeArea
      style={{ width: '500px', height: '500px' }}
      data-testid="swiperia"
      {...props}
    />
  );
  const { getByTestId } = _render(ui);
  const el = getByTestId('swiperia');
  const events = new MouseEvents(el);
  return { ...props, events };
};

describe('SwipeArea', () => {
  it('should render children', () => {
    const { getByText } = _render(
      <SwipeArea>
        <div>Test Content</div>
      </SwipeArea>
    );
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should pass the ref when it is a function', () => {
    const ref = vi.fn();
    _render(<SwipeArea ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('should pass the ref when it is a reference object', () => {
    const ref = { current: null };
    _render(<SwipeArea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should call onSwipeStart when swiping starts', () => {
    const { onSwipeStart, events } = render();
    events.start();
    expect(onSwipeStart).toHaveBeenCalled();
  });

  it('should call onSwiped when swiping ends', () => {
    const { onSwiped, events } = render();
    events.start();
    events.end();
    expect(onSwiped).toHaveBeenCalled();
  });

  it('should call onSwipedLeft when swiping left', async () => {
    const { onSwipedLeft, events } = render();
    await events.swipeLeft();
    expect(onSwipedLeft).toHaveBeenCalled();
  });

  it('should call onSwipedRight when swiping right', async () => {
    const { onSwipedRight, events } = render();
    await events.swipeRight();
    expect(onSwipedRight).toHaveBeenCalled();
  });

  it('should call onSwipedUp when swiping up', async () => {
    const { onSwipedUp, events } = render();
    await events.swipeUp();
    expect(onSwipedUp).toHaveBeenCalled();
  });

  it('should call onSwipedDown when swiping down', async () => {
    const { onSwipedDown, events } = render();
    await events.swipeDown();
    expect(onSwipedDown).toHaveBeenCalled();
  });

  it('should call onSwiping while swiping', () => {
    const { onSwiping, events } = render();
    events.start();
    events.move();
    expect(onSwiping).toHaveBeenCalled();
  });
});
