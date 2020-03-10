import React, { useState, useRef } from "react";

function ReactRefApp() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);
  function handleChange(event) {
    setTodoItem(event.target.value);
  }

  function addTodoItem(event) {
    event.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoItem("");
    inputRef.current.focus();
  }
  const todo = todoList.map(to => <h2>{to}</h2>);
  return (
    <div>
      <h3>Add Todo Items to the List</h3>
      <input
        type="text"
        placeholder="enter todo item"
        name="todo"
        onChange={handleChange}
        value={todoItem}
        ref={inputRef}
      />
      <button onClick={addTodoItem}>Add Item</button>
      <hr />
      {todo}
    </div>
  );
}
export default ReactRefApp;
