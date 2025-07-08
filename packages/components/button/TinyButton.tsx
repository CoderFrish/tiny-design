import { Component } from 'solid-js';
import './TinyButton.css';
import { TinyButtonProps } from '.';

const mainStyleClass = (props: TinyButtonProps) => {
  return `tiny_${props.type == undefined ? 'default' : props.type}_button`;
};

const customClass = (props: TinyButtonProps) => {
  return `${props.class == undefined ? '' : ` ${props.class}`}`
}

const TinyButton: Component<TinyButtonProps> = (props) => {
  return (
    <>
      <button class={`tiny_button ${mainStyleClass(props)} ${customClass(props)}`} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};

export default TinyButton;
