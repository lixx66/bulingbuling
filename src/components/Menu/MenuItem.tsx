import React, { useContext } from 'react';
import classNames from 'classnames';
import { IMenuItemProps } from './types';
import { MenuContext } from './Menu';

export const MenuItem: React.FC<IMenuItemProps> = props => {
  console.log(233333333333);
  const context = useContext(MenuContext);

  const { index, disable, className, style, children } = props;
  const classes = classNames(`menu-item`, className, {
    'is-disable': disable,
    'is-active': context.index === index && !disable,
  });
  const handleClick = () => {
    if (context.onSelect && !disable && typeof index === 'string') {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
MenuItem.displayName = 'MenuItem';
