import { useState } from "react";

export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);

  function addClick() {
    const newItem = document.getElementById("todoInput").value; 
    if (newItem.trim() !== "") { 
      setTodoItems((prevItems) => [...prevItems, newItem]);
      document.getElementById("todoInput").value = "";
    }
  }

  function delClick(index) {
    if(document.getElementById(index).checked){
      setTodoItems((prevItems) => prevItems.filter((element, i) => i !== index));
    }
    // setTodoItems((prevItems) => prevItems.filter((element, i) => i !== index));
  }

  return (
    <div id="todoContainer">
        <h1>TODO LIST</h1>
      <input type="text" id="todoInput" />
      <button id="todo-btn" onClick={addClick}>
        Add
      </button>
      <ul>
        {todoItems.map((item, i) => (
            
          <li key={i}>
            <input type="checkbox" name="check" id={i} />
            {item}
            <button className="delBtn" onClick={()=>delClick(i)}>Del</button></li>
        ))}
      </ul>
    </div>
  );
}
