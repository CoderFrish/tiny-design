import { TinyButton } from '@tiny-design/core';
import { render } from 'solid-js/web';

const App = () => {
  return (
    <>
      <TinyButton>点击我</TinyButton>
    </>
  );
};

render(() => <App />, document.getElementById('app'));
