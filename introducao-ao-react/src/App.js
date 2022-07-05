import "./App.css";
import React from "react";
import HelloWorldList from "./HelloWorldList";


const helloWorldProps = [
  {
    hello: "Olá",
    world: "Mundo",
    date: new Date(),
    style: "um",
  },
  {
    hello: "Hello",
    world: "World",
    date: new Date(),
    style: "dois",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorldList helloWorldProps={helloWorldProps} />
      </header>
    </div>
  );
}

export default App;
