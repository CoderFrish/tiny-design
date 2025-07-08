# Button | 按钮

## 基础用法
```tsx
function App() {
    return (
        <>
            <TinyButton>我是按钮+</TinyButton>
        </>
    )
}
```

## 点击事件
```tsx
function event() {
    console.log("Hello World!!");
}

function App() {
    return (
        <>
            <TinyButton onClick={event}>我是按钮</TinyButton>
        </>
    )
}
```

# API
|  API   | 作用  | 默认值 | 可选值 |
|  ----  | ----  | --- | --- |
| class  | 给组件添加样式，方便自定义 | 无默认值 | 无可选值 |
| onClick  | 点击事件 | 无默认值 | 无可选值 |
| type  | 按钮样式 | default | 'default', 'primary', 'error', 'info', 'success', 'warn' |
