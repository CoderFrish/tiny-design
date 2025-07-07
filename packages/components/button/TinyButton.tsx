import { Component } from 'solid-js';
import './TinyButton.css';
import { TinyButtonProps } from '.';

const mainStyleClass = (props: TinyButtonProps) => {
  return `tiny_${props.type == undefined ? 'default' : props.type}_button`;
};

const TinyButton: Component<TinyButtonProps> = (props) => {
  return (
    <>
      <button class={`tiny_button ${mainStyleClass(props)}`} onClick={props.clickEvent}>
        {props.children}
      </button>
    </>
  );
};

export default TinyButton;
