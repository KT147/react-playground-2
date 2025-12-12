//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


//CHALLENGE: I have extracted the Input Area, including the <input> and
//<button> elements into a seperate Component called InputArea.
//Your job is to make the app work as it did before but this time with the
//InputArea as a seperate Component.

// DO NOT: Modify the ToDoItem.jsx
// DO NOT: Move the input/button elements back into the App.jsx

//Hint 1: You will need to think about how to manage the state of the input element
//in InputArea.jsx.
//Hint 2: You will need to think about how to pass the input value back into
//the addItem() function in App.jsx.

import { useRef, useState } from "react";
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";



function Todo() {
    const [items, setItems] = useState([]);
  
  
    function addItem(inputText) {
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
    }
  
    function deleteItem(id) {
      setItems(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>To-Do List</h1>
        </div>
        <TodoInput addItem={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Todo;

// function Todo() {
//   const [todos, setTodos] = useState([]);

//   const [inputText, setInputText] = useState("");

//   const todoRef = useRef();

//   function handleChange(event) {
//     setInputText(event.target.value);
//   }

//   function addTodo() {
//     const newTodo = todoRef.current.value;
//     setTodos([...todos, newTodo]);
//   }

//   function deleteItem(id) {
//     setTodos((prev) => {
//         return prev.filter((item, index) => {
//             return index !== id
//         } )
//     } )
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.heading}>
//         <h1>To-Do List</h1>
//       </div>
//       <div>You are currently writing: {inputText}</div>
//       <div className={styles.form}>
//         <input
//           onChange={handleChange}
//           value={inputText}
//           ref={todoRef}
//           type="text"
//         />
//         <button onClick={addTodo}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {todos.map((todo, id) => (
//             <TodoItem key={id} id={id} todo={todo} onChecked={deleteItem} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Todo;
