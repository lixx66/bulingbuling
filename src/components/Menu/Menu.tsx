import React, { createContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import { IMenuContext, IMenuItemProps, IMenuProps, menuIndex } from './types';

export const MenuContext = createContext<IMenuContext>({ index: '0' });
export const Menu: React.FC<IMenuProps> = props => {
  const {
    className,
    mode,
    style,
    defaultIndex = '0',
    children,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const handleClick = (index: menuIndex) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = useMemo(() => {
    return {
      index: currentActive,
      onSelect: handleClick,
      mode,
      defaultOpenSubMenus,
    };
  }, [currentActive]);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const chileElement = child as React.FunctionComponentElement<IMenuItemProps>;
      const { displayName } = chileElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(chileElement, { index: `${index}` });
      } else {
        console.log(chileElement.type);

        console.error('Warning:Menu has a child which is not a MenuItem component');
      }
    });
  };

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  defaultOpenSubMenus: [],
};
