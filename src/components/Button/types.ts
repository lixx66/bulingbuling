import React from 'react';
type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

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
