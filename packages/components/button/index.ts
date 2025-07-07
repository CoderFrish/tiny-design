import TinyButton from './TinyButton';
import type { JSX } from 'solid-js';

export interface TinyButtonProps {
  clickEvent?: () => void;
  type?: ButtonType;
  children?: JSX.Element;
}

export type ButtonType = 'default' | 'primary' | 'info' | 'warn' | 'error' | 'success';

export { TinyButton };
