import { act, renderHook } from '@testing-library/react';
import { Swiper } from 'swiperia-js';
import { vi } from 'vitest';
import { MouseEvents } from '../../testing/mouse-events.js';
import { useSwiperia } from './useSwiperia.js';

describe('useSwiperia', () => {
  it('should initialize swiperia and return a ref', () => {
    const { result } = renderHook(() => useSwiperia());

    expect(typeof result.current.ref).toBe('function');
  });

  it('should create a Swiper instance when the ref is called with a node', () => {
    const { result } = renderHook(() => useSwiperia());

    act(() => {
      result.current.ref(document.createElement('div'));
    });

    expect(result.current.swiperia.current).toBeInstanceOf(Swiper);
  });

  it('should keep the Swiper instance when the ref is called with null', () => {
    const { result } = renderHook(() => useSwiperia());

    act(() => {
      result.current.ref(document.createElement('div'));
    });
    const instance = result.current.swiperia.current;

    act(() => {
      result.current.ref(null);
    });

    expect(result.current.swiperia.current).toBe(instance);
  });

  it('should replace the Swiper instance when the ref moves to another node', () => {
    const { result } = renderHook(() => useSwiperia());

    act(() => {
      result.current.ref(document.createElement('div'));
    });
    const first = result.current.swiperia.current;
    const destroy = vi.spyOn(first as Swiper, 'destroy');

    act(() => {
      result.current.ref(document.createElement('div'));
    });

    expect(destroy).toHaveBeenCalled();
    expect(result.current.swiperia.current).not.toBe(first);
  });

  it('should call the appropriate callbacks when a swipe occurs', async () => {
    const handlers = {
      onSwiped: vi.fn(),
      onSwipedDown: vi.fn(),
      onSwipedLeft: vi.fn(),
      onSwipedRight: vi.fn(),
      onSwipedUp: vi.fn(),
      onSwipeStart: vi.fn(),
      onSwiping: vi.fn(),
      onSwipeCancelled: vi.fn(),
    };

    const { result } = renderHook(() => useSwiperia(handlers));

    const node = document.createElement('div');
    act(() => {
      result.current.ref(node);
    });

    await act(async () => {
      await new MouseEvents(node).swipeDown();
    });

    expect(handlers.onSwipeStart).toHaveBeenCalled();
    expect(handlers.onSwiped).toHaveBeenCalled();
    expect(handlers.onSwipedDown).toHaveBeenCalled();
    expect(handlers.onSwipedRight).not.toHaveBeenCalled();
    expect(handlers.onSwipedUp).not.toHaveBeenCalled();
    expect(handlers.onSwipedLeft).not.toHaveBeenCalled();
    expect(handlers.onSwipeCancelled).not.toHaveBeenCalled();
  });

  it('should keep using the latest callbacks without re-attaching listeners', () => {
    const first = vi.fn();
    const second = vi.fn();
    const { result, rerender } = renderHook(
      ({ onSwipeStart }) => useSwiperia({ onSwipeStart }),
      { initialProps: { onSwipeStart: first } },
    );

    const node = document.createElement('div');
    act(() => {
      result.current.ref(node);
    });
    const instance = result.current.swiperia.current;

    rerender({ onSwipeStart: second });
    new MouseEvents(node).start();

    expect(result.current.swiperia.current).toBe(instance);
    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it('should destroy the Swiper instance on unmount', () => {
    const { result, unmount } = renderHook(() => useSwiperia());

    act(() => {
      result.current.ref(document.createElement('div'));
    });

    expect(result.current.swiperia.current).toBeInstanceOf(Swiper);

    unmount();

    expect(result.current.swiperia.current).toBeNull();
  });
});
