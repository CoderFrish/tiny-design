import { Component } from "solid-js"
import "./TinyButton.css"
import { TinyButtonProps } from "."

const TinyButton: Component<TinyButtonProps> = (props) => {
    return (
        <>
            <button
                class="tiny_button"
                onClick={props.clickEvent}
            >{props.children}</button>
        </>
    )
}

export default TinyButton
