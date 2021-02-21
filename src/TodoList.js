import React from 'react';
import Todo from './Todo'; 
export default function TodoList({todoList, tickFunction}) {
  return (
    todoList.map(todo =>{
        return <Todo key={todo.id} x={todo} 
        timePass = {tickFunction}/>
    })
  );
}
