# Get-started | 快速开始

## 安装

```bash
npm install tiny-design
```

## 开始使用

**导入样式**

main.tsx

```tsx
import { render } from 'solid-js/web';
import Test from './test';
import 'tiny-design/dist/index.css';

const App = () => {
  return (
    <>
      <Test></Test>
    </>
  );
};

render(() => <App />, document.getElementById('app'));
```

test.tsx

```tsx
import { TinyButton } from 'tiny-design';

function Test() {
  return (
    <>
      <TinyButton type="primary">Primary</TinyButton>
      <TinyButton type="default">Default</TinyButton>
      <TinyButton type="info">Info</TinyButton>
      <TinyButton type="success">Success</TinyButton>
      <TinyButton type="warn">Warn</TinyButton>
      <TinyButton type="error">Error</TinyButton>
    </>
  );
}

export default Test;
```
