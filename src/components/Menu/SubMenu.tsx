import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import { IMenuItemProps, ISubMenuProps } from './types';

export const SubMenu: React.FC<ISubMenuProps> = props => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened =
    props.index && context.mode === 'vertical' ? openedSubMenus.includes(props.index) : false;
  console.log(props.index);

  const [menuOpen, setMenuOpen] = useState(isOpened);

  const classes = classNames(`menu-item`, props.className, {
    'is-active': context.index === props.index,
  });
  const subMenuClass = classNames(`viking-submenu`, {
    'menu-opened': menuOpen,
  });

  let timer: any;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(() => !menuOpen);
  };
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 500);
  };

  const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : null;
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : null;

  const renderChildren = () => {
    const childrenComponent = React.Children.map(props.children, (child, index) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}--` });
      } else {
        console.error('warning : SubMenu has a child which is not a MenuItem');
      }
    });
    return <ul className={subMenuClass}>{childrenComponent}</ul>;
  };

  return (
    <li key={props.index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={handleClick} {...clickEvents}>
        {props.title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
