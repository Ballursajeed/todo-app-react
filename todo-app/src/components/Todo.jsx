
import { useEffect, useState } from "react"
import "../styles/Todo.css"
import AddTodo from "./Add"

const Todo = () => {

    const [input,setInput] = useState('')
    const [todos,setTodos] = useState([])

    const addTodo = (e) => {
           e.preventDefault()
           setTodos([...todos,input])
           setInput(' ') 
    }

    const deletHandler = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
     }

     const editHandler = (index) => {
         const update = prompt("change todo")
         const newTodos = [...todos];
         newTodos.splice(index, 1,update);
         setTodos(newTodos)
     }

  return (
   <>
   <div className="container">
    <div className="todo">
        <h1>Todo List</h1>
        <div className="input">
         <input id="inp" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="add item..." />
        </div>
        <div className="btn">
         <button onClick={addTodo}>Add</button>
        </div>
        <ol>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}
        <button onClick={() => deletHandler(index)}>Delete</button>
        <button onClick={() => editHandler(index)}>edit</button>
        </li>
     ))}
   </ol>

    </div>
   </div>
   </>
  )
}

export default Todo
