import { type } from 'os';
import React from 'react';
// Menu
type MenuMode = 'horizontal' | 'vertical';
type selectCallBack = (selectedIndex: menuIndex) => void;

export type menuIndex = string;

export interface IMenuContext {
  index?: menuIndex;
  onSelect?: selectCallBack;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export interface IMenuProps {
  defaultIndex?: menuIndex;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectCallBack;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}
// MenuItem
export interface IMenuItemProps {
  index?: menuIndex;
  disable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// SubMenu
export interface ISubMenuProps {
  index?: menuIndex;
  title: string;
  className?: string;
  children?: React.ReactNode;
}
