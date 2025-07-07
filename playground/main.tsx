import { TinyTest } from '@tiny-design/core';
import { render } from 'solid-js/web';

const App = () => {
  return (
    <>
      <TinyTest />
    </>
  );
};

render(() => <App />, document.getElementById('app'));
