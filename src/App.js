import React from "react";
import TodoItem from "./TodoItem";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default App;
