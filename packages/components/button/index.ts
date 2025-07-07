import TinyButton from "./TinyButton"
import type { JSX } from 'solid-js';

export interface TinyButtonProps {
    clickEvent?: () => void,
    children?: JSX.Element;
}

export { TinyButton }
