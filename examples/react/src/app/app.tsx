// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { useSwiperia } from 'swiperia-react';

export function App() {
  const { ref } = useSwiperia({
    onSwipeStart: (e) => {
      console.log(e);
    },
    // onSwiped: (e) => {
    //   console.log(e);
    // },
    onSwipedDown: (e) => {
      console.log(e);
    },
  });
  return (
    <div
      ref={ref}
      style={{ height: '200px', width: '200px', backgroundColor: 'blue' }}
    ></div>
  );
}

export default App;
