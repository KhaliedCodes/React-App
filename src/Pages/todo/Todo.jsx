import { useState } from "react";
import TodoForm from "../../Components/todo/TodoForm";
import TodoList from "../../Components/todo/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "../../store";
import './Todo.css';
function Todo() {
  const dispatch = useDispatch()
  const tasksList = useSelector((state) => state.todos) 
  
  const addTodo = (taskaya) => {
    // setTodos([...todos, task]);
    dispatch(addTodoAction(taskaya))
    console.log(tasksList);
    
  };

  const deleteTodo = (index) => {
    // setTodos(todos.filter((todo,i) => i !== index))
    dispatch(deleteTodoAction(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={tasksList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
