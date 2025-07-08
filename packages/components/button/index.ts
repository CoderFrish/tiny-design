import TinyButton from './TinyButton';
import type { JSX } from 'solid-js';

export interface TinyButtonProps {
  onClick?: (() => void);
  type?: ButtonType;
  children?: JSX.Element;
  class?: string;
}

export type ButtonType = 'default' | 'primary' | 'info' | 'warn' | 'error' | 'success';

export { TinyButton };
