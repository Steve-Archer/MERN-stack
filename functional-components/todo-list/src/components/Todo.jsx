import React, { useState } from "react"

const Todo = props => {
    let [content, setContent] = useState('');
    let [completed, setCompleted] = useState(false);
    let [listOfTodo, setListOfTodo] = useState([]);
    const createTodo = (e) => {
        e.preventDefault();
        let todoObject = { content, completed };
        setListOfTodo([...listOfTodo, todoObject]);
        console.log(listOfTodo);
    }
    const toggleCompleted = (index) => {
        let [...copy] = listOfTodo;
        copy[index].completed = !copy[index].completed;
        setListOfTodo(copy);
        console.log(listOfTodo, index);
    }
    const deleteTodo = (index) => {
        let copy = listOfTodo.filter((listOfTodo, i) => {
            return i != index
        })
        console.log(copy, index);
        setListOfTodo(copy);
    }
    return (
        <div>
            <form onSubmit={createTodo}>
                <input type="text" placeholder="What To Do?" onChange={(e) => setContent(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
            {
                listOfTodo.map((todo, i) => {
                    return (
                        <div key={i}>
                            <h1 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.content}</h1>
                            <p><input type="checkbox" onClick={() => toggleCompleted(i)} />Completed</p>
                            <button onClick={(e) => { deleteTodo(i) }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todo;