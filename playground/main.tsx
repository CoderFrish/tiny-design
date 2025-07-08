import { TinyButton } from '@tiny-design/core';
import { render } from 'solid-js/web';
import "./style.css"

const event = () => {
  console.log("Hello World!!");
}

const App = () => {
  return (
    <>
      <div>
        <TinyButton type="primary" onClick={event}>Primary</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="default">Default</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="info">Info</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="success" class='test_button'>Success</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="warn">Warn</TinyButton>
        &nbsp;&nbsp;
        <TinyButton type="error">Error</TinyButton>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById('app'));
