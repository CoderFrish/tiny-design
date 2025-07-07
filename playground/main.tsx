import { TinyButton } from '@tiny-design/core';
import { render } from 'solid-js/web';

const App = () => {
  return (
    <>
      <div>
        <TinyButton type="primary">Primary</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="default">Default</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="info">Info</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="success">Success</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="warn">Warn</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="error">Error</TinyButton>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById('app'));
