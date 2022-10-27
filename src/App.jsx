import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {
  const onClickButton = () => {
    alert();
  };
  
  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  }

  return (
    <>
      <h1>こんにちは！</h1>
      <ColoredMessage color="blue">how are you</ColoredMessage>
      <ColoredMessage color="green">i'm ok</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

