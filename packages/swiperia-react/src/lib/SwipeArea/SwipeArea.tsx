import React, { PropsWithChildren } from 'react';
import { SwiperiaCallbacks } from '../types';
import { useSwiperia } from '../useSwiperia/useSwiperia';

export type SwipeAreaProps = PropsWithChildren<SwiperiaCallbacks> &
  React.ComponentProps<'div'>;

const SwipeArea: React.FC<SwipeAreaProps> = ({
  onSwipeStart,
  onSwipedDown,
  onSwiped,
  onSwipedLeft,
  onSwipedRight,
  onSwipedUp,
  onSwiping,
  ...props
}) => {
  const { ref } = useSwiperia({
    onSwipeStart,
    onSwipedDown,
    onSwiped,
    onSwipedLeft,
    onSwipedRight,
    onSwipedUp,
    onSwiping,
  });
  return <div ref={ref} {...props} />;
};

export default SwipeArea;
