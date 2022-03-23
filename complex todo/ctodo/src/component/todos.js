import React, { useEffect, useState } from 'react'
import './style.css'

// get from localStorage
const getLocal = ()=>{
  const myTodos = localStorage.getItem('setmyTodos')
  console.log(myTodos)
  if(myTodos){
    return JSON.parse(myTodos);
  }
 
    return []
  
}

const Todos = () => {
    const [inputData,setinputData] = useState('')
    const [todos,setTodos] = useState(getLocal)
    const [todoIndex,settodoIndex] = useState('')
    const [toggleButton,settoggleButton] = useState(false)

    //add input data
    const addInputdata = ()=>{
      if (!inputData) {
        alert("Please enter the message")
      }
      else if (inputData && toggleButton){
        setTodos(
          todos.map((todo)=>{
          if (todo.id === todoIndex){
            
            return {...todo ,name:inputData}
          }
        
            return todo
        }
        ));
        setinputData("");
        settodoIndex(null);
      settoggleButton(false);
        
      }
      else {
        const newInput = {
          id: new Date().getTime().toString(),
          name: inputData,
        }
        setTodos([newInput,...todos]);
        setinputData('');
      }
    }
    useEffect(()=>{
      localStorage.setItem('setmyTodos',JSON.stringify(todos))
    },[todos])
    //edit todo
    const editTodo =(id)=>{
      const todo_item_edit = todos.find((todo)=>{
        return todo.id === id;
      });
      console.log(todo_item_edit)
      setinputData(todo_item_edit.name)
      settodoIndex(id)
      settoggleButton(true)
        
    }
  
    const deleteItem =(id)=>{
      setTodos(todos.filter(
        (todo)=>{
          return todo.id !== id;
        }
      ))
        
    }
  return (
 <>
       <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event)=>setinputData(event.target.value)}
              />
        
              {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addInputdata}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addInputdata} ></i>
            )}

            {/* show our items  */}
          <div className="showItems">
            {todos.map((todo) => {
              return (
                <div className="eachItem" key={todo.id}>
                  <h3>{todo.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editTodo(todo.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(todo.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          </div>
          </div>

 </>
  )
}

export default Todos