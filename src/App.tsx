import { Button, SubMenu, Menu, MenuItem } from './components';

function App() {
  return (
    <div className="App">
      <Button className="123" autoCorrect="123">
        123
      </Button>
      <Button
        btnType="primary"
        onClick={() => {
          console.log(23333);
        }}
      >
        456
      </Button>
      <Button btnType="primary" size="sm">
        456
      </Button>
      <Button btnType="danger" size="lg">
        456
      </Button>
      <Button btnType="link" size="lg" href="123">
        456
      </Button>
      <Button btnType="danger" size="lg" disable={true}>
        456
      </Button>
      <Button btnType="link" size="sm" disable href="123">
        456
      </Button>
      <hr />
      <Menu
        onSelect={index => {
          console.log(index);
        }}
        defaultOpenSubMenus={['6']}
        mode="vertical"
      >
        <MenuItem>123</MenuItem>
        <MenuItem>123789</MenuItem>
        <MenuItem>asdasd</MenuItem>
        <MenuItem>123</MenuItem>

        <MenuItem>123789</MenuItem>
        <SubMenu title="Dropdown">
          <MenuItem>123</MenuItem>
          <MenuItem>123789</MenuItem>
          <MenuItem>asdasd</MenuItem>
          <MenuItem>123</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
