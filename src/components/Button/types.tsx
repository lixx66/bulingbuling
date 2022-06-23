import React from 'react';
export enum ButtonSize {
  large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export interface IBaseButtonProps {
  className: string;
  disable: boolean;
  size: ButtonSize;
  btnType: ButtonType;
  href: string;
  children: React.ReactNode;
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
