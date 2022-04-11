import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { HideCompletedTodos } from "./HideCompletedTodos";
import { ShowCompletedTodos } from "./ShowCompletedTodos";
import './App.css';
const defaultTodos=[
  {text:'Cut Onion', completed:false, hide: false},
  {text:'Pray to god', completed:false, hide: false},
  {text:'Kill the killer', completed:false, hide: false},
  {text:'Feed the dogs', completed:false, hide: false},
  {text:'Go to the supermarket', completed:false, hide: false}
];
function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  if(!searchValue.length >= 1){
    searchedTodos = todos
  } else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const toggleCompleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    todos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  
  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const HideCompletedTodosFn =(completed)=>{
    const completedTodosIndex =  todos.findIndex(todo => todo.completed == completed)
    const newTodos = [...todos]
    if (todos[completedTodosIndex]){
      newTodos[completedTodosIndex].hide = true
    }
    console.log(newTodos)
    setTodos(newTodos)
  }


  return (
   <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />    
      {/*TODO CONGRATS!*/}
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> toggleCompleteTodo (todo.text)}
            onDelete={()=> deleteTodo (todo.text)}
            hide={todo.hide}
           />
        ))}
      </TodoList>
      <CreateTodoButton />      
      <HideCompletedTodos
        onHide={()=> HideCompletedTodosFn()}
      />      
      <ShowCompletedTodos />      
   </React.Fragment>
  );
}

export default App;
