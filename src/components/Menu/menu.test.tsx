import React from 'react';
import { fireEvent, render, RenderResult, cleanup } from '@testing-library/react';
import { IMenuProps, MenuItem, Menu, SubMenu } from './index';
import { wait } from '@testing-library/user-event/dist/utils/misc/wait';

const testProps: IMenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};

const testVerProps: IMenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};

const generaMenu = (props: any) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disable>disable</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>123</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile = () => {
  const cssFile = `
    .viking-submenu{
      display:none
    }
    .viking-submenu.menu-opened{
      display:block
    }
  `;
  const style = document.createElement('style');
  style.innerHTML = cssFile;
  return style;
};

let wrapper: RenderResult;
let menuElement: HTMLElement;
let activeElement: HTMLElement;
let disableElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generaMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disableElement = wrapper.getByText('disable');
  });
  it('should render correct Menu and MenuItem base on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('viking-menu test');
    expect(menuElement.getElementsByTagName('li').length).toEqual(5);
    expect(menuElement.querySelectorAll(':scope>li').length).toEqual(4);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disableElement).toHaveClass('menu-item is-disable');
  });
  it('click item should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');

    fireEvent.click(disableElement);
    expect(disableElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup();
    const wrapperVertical = render(generaMenu(testVerProps));
    const menuElementV = wrapperVertical.getByTestId('test-menu');
    expect(menuElementV).toHaveClass('menu-vertical');
  });

  it('should show dropdown items when hover on subMenu ', async () => {
    expect(wrapper.queryByText('123')).not.toBeVisible();
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);
    await wait(500);
    expect(wrapper.queryByText('dropdown')).toBeValid();
    fireEvent.click(wrapper.getByText('123'));
    await wait(500);
    expect(wrapper.queryByText('123')).toBeVisible();
  });
});
