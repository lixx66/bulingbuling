import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = props => {
  const { btnType, disable, size, children, href, className, ...restProps } = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disable: btnType === 'link' && disable,
  });
  if (btnType === 'link') {
    if (href) {
      return (
        <a href={href} className={classes} {...restProps}>
          {children}
        </a>
      );
    } else {
      throw new URIError('Button.link must have href!!!');
    }
  } else {
    return (
      <button className={classes} disabled={disable} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disable: false,
  btnType: 'default',
};
