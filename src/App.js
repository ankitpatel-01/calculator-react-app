import { useState } from 'react';
import * as math from 'mathjs'
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {

  const color = "#f2a33c";

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value + ""]);
  }

  const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  const clearDisplay = () => {
    setResult("");
    setText("");
  }

  const renderButton = (value) => {
    return (
      <Button symbol={value} handleClick={addToText} />
    );
  }

  return (
    <div className="App">
      <div className="cal-container">
        <Display result={result} text={text} />
        <div className="row">
          {renderButton("7")}
          {renderButton("8")}
          {renderButton("9")}
          <Button symbol="/" color={color} handleClick={addToText} />
        </div>
        <div className="row">
          {renderButton("4")}
          {renderButton("5")}
          {renderButton("6")}
          <Button symbol="x" color={color} handleClick={addToText} />
        </div>
        <div className="row">
          {renderButton("1")}
          {renderButton("2")}
          {renderButton("3")}
          <Button symbol="+" color={color} handleClick={addToText} />
        </div>
        <div className="row">
          {renderButton("0")}
          {renderButton(".")}
          <Button symbol="=" color={color} handleClick={calculate} />
          <Button symbol="-" color={color} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color={color} isClear={true} handleClick={clearDisplay} />
      </div>
    </div>
  );
}

export default App;
