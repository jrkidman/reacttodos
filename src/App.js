import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

function ToDoComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("");
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <h1> To Do List</h1>
      {/* text input 1 */}
      <label>To Do Title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          const newTitle = event.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br />

      {/* text input 2 */}
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(event) => {
          const newDescription = event.target.value;
          setDescription(newDescription);
        }}
      ></input>
      <br />

      {/* dropdown input */}
      <label>Priority:</label>
      <select value={importance}
        onChange={(event) => {
          setImportance(event.target.value);
        }}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>


      {/* button */}
      <button type="button" value={toDoList}
        onClick={(event) => {
          const newToDo = { title, description, importance };
          const updatedToDoList = [...toDoList]
          updatedToDoList.push(newToDo);
          setToDoList(updatedToDoList);
          setTitle("");
          setDescription("");
          setImportance("Low");
        }}>Submit</button>
      <hr />

      {/* display */}
      <div>
        {toDoList.map((element) => {
          return (
            <div key={element}>
              <ul>
                <li>
                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                  <h4>{element.importance}</h4>
                </li>
                <hr />
              </ul>
            </div>
          )
        })
        }
      </div>






    </div>
  );
}

export default App;
