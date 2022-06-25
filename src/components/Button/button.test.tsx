import { render } from '@testing-library/react';
import { Button } from './button';

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>);
  const element = wrapper.queryByText('Nice');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
});

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });
  it('should render the correct component based on diffrernt props', () => {
    const wrapper = render(
      <Button btnType="primary" size="sm">
        123456
      </Button>,
    );
    const element = wrapper.getByText('123456');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-sm btn-primary');
  });
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType="link" size="sm" href="123">
        987654324123
      </Button>,
    );
    const element = wrapper.getByText('987654324123');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-sm btn-link');
  });
  it('should render disable button when disable set to true ', () => {
    const wrapper = render(
      <Button btnType="link" size="sm" href="123" disable>
        987654324123
      </Button>,
    );
    const element = wrapper.getByText('987654324123');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-sm btn-link disable');
  });
});
