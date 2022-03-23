import React,{useState} from 'react'

const App = () => {
  let listdata= []
  const [todo,setTodo]=useState(listdata)
  const [userInput,setuserInput]= useState('')

  const setData = ()=>{
    setTodo([...todo,userInput])
    setuserInput('')
  }
  
  const deletetodo =(i)=>{
    const updateTodo = todo.find((curElem,index) => {
      return  (i !== index)
    });
    console.log(updateTodo)
    // setTodo(updateTodo)
  }
  return (
<>

<h1>todo</h1>
<input type="text" value={userInput} onChange={(event)=>setuserInput(event.target.value)} />
<button onClick={()=>setData()}>Add</button>
<br />
<ul>
{
  todo.map((todoData,i)=>{ 
    return (
      <div key={i}>
      <li >{todoData},{i}</li>
      <button>edit</button>
      <button onClick={()=>deletetodo(i)}>delete{i}</button>
      </div>
      )
  })
  
}
</ul>

</>
  )
}

export default App