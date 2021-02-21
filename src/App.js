import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {


  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  
  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storedTodos)
      setTodos(storedTodos);
  }, []);

  function toggleTodo(id){
    const newTodos= [...todos];
    const todo=newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "")
      return;
    setTodos(prevTodos => {
      let new_id = 1;
      if (prevTodos.length > 0 && prevTodos[prevTodos.length - 1].id)
        new_id = prevTodos[prevTodos.length - 1].id + 1;
      console.log(new_id);
      return [...prevTodos, {
        id: new_id,
        name: name,
        complete: false
      }]
    })
    //console.log(todos);
    todoNameRef.current.value = null;
  }

  function handleTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todoList={todos} tickFunction={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> add Todo</button>
      <button onClick={handleTodos}> Clear Completed Todos</button>
      <div>{todos.filter(todo =>!todo.complete).length} left to do</div>
    </>
  );
}

export default App;
