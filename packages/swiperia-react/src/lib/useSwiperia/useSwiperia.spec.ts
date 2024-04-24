import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import { Swiper } from 'swiperia-js';
import { useSwiperia } from './useSwiperia';
import { MouseEvents } from 'test-utils';

describe('useSwiperia', () => {
  it('should initialize swiperia and return a ref', () => {
    const { result } = renderHook(useSwiperia);
    const { ref } = result.current;

    expect(ref).toBeDefined();
    expect(typeof ref).toBe('function');
  });

  it('should create a new Swiper instance when the ref is called with a valid node', () => {
    const { result } = renderHook(useSwiperia);
    const { ref } = result.current;

    const node = document.createElement('div');
    act(() => {
      ref(node);
    });

    expect(result.current.swiperia.current).toBeDefined();
    expect(result.current.swiperia.current).toBeInstanceOf(Swiper);
  });

  it('should not destroy the Swiper instance when the ref is called with null', () => {
    const { result } = renderHook(useSwiperia);
    const { ref } = result.current;

    const node = document.createElement('div');
    act(() => {
      ref(node);
    });

    expect(result.current.swiperia.current).toBeDefined();

    act(() => {
      ref(null);
    });

    expect(result.current.swiperia.current).toBeDefined();
  });

  it('should call the appropriate callback when a swipe event occurs', async () => {
    const onSwiped = vi.fn();
    const onSwipedDown = vi.fn();
    const onSwipedLeft = vi.fn();
    const onSwipedRight = vi.fn();
    const onSwipedUp = vi.fn();
    const onSwipeStart = vi.fn();
    const onSwiping = vi.fn();

    const { result } = renderHook(() =>
      useSwiperia({
        onSwiped,
        onSwipedDown,
        onSwipedLeft,
        onSwipedRight,
        onSwipedUp,
        onSwipeStart,
        onSwiping,
      })
    );

    const { ref } = result.current;

    const node = document.createElement('div');
    act(() => {
      ref(node);
    });

    await act(async () => {
      const event = new MouseEvents(node);
      await event.swipeDown();
    });

    expect(onSwiped).toHaveBeenCalled();
    expect(onSwipedDown).toHaveBeenCalled();
    expect(onSwipedRight).not.toHaveBeenCalled();
    expect(onSwipedUp).not.toHaveBeenCalled();
    expect(onSwipedLeft).not.toHaveBeenCalled();
  });

  it('should destroy the Swiper instance on cleanup', () => {
    const { result, unmount } = renderHook(useSwiperia);
    const { ref } = result.current;

    const node = document.createElement('div');
    act(() => {
      ref(node);
    });

    expect(result.current.swiperia.current).toBeDefined();

    act(() => {
      unmount();
    });

    expect(result.current.swiperia.current).toBeNull();
  });
});
