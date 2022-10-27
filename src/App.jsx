import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num => num +1);
  };
  
  return (
    <>
      <h1>こんにちは！</h1>
      <ColoredMessage color="blue">how are you</ColoredMessage>
      <ColoredMessage color="green">i'm ok</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

