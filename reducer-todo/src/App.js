import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = item => {
    dispatch({type:"ADD_TODO", payload: item })
  }
  const toggleTodo = id => {dispatch ({type: "TOGGLE_TODO", payload: id})
};

const deleteCompleted = () => {
  dispatch({ type: "DELETE_COMPLETED"})
};

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} deleteCompleted={deleteCompleted}/>
      <TodoList todoList= {state.todoList} toggleTodo={toggleTodo}/>   
    </div>
  );
}

export default App;
