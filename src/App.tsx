import { Button, ButtonSize, ButtonType } from './components/Button';

function App() {
  return (
    <div className="App">
      <Button className="123" autoCorrect="123">
        123
      </Button>
      <Button
        btnType={ButtonType.Primary}
        onClick={() => {
          console.log(23333);
        }}
      >
        456
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        456
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.large}>
        456
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.large} href="123">
        456
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.large} disable={true}>
        456
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.large} disable href="123">
        456
      </Button>
    </div>
  );
}

export default App;
