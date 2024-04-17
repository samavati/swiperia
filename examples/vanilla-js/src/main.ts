import {
  MouseSwipeDetector,
  SwipeDetector,
  TouchSwipeDetector,
} from 'swiperia-js';

const target = document.getElementById('draggable')!;
const direction = document.getElementById('direction')!;

const swiperia = new SwipeDetector(target, [
  MouseSwipeDetector,
  TouchSwipeDetector,
]);

swiperia.listen((e) => {
  switch (e.type) {
    case 'end':
      target.style.transform = 'none';
      document.body.style.cursor = 'unset';
      direction.innerText = 'Swiped ' + e.direction;
      break;
    case 'cancel':
      target.style.transform = 'none';
      document.body.style.cursor = 'unset';
      direction.innerText = 'Canceled';
      break;
    case 'start':
    case 'move':
      document.body.style.cursor = 'grabbing';
      target.style.transform = `translate(${e.deltaX}px, ${e.deltaY}px)`;
      break;
    default:
      target.style.transform = 'none';
      direction.innerText = 'Drag me!';
      break;
  }
});
