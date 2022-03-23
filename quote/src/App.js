import { useState } from "react";
import Quotes from "./Quotes";


function App() {
  const[item ,setItem] = useState([])

  const fetchData=()=>{ fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    setItem(data);
  });}
  return (
    <div >
    hello
    <button onClick={()=>fetchData()}>fetch</button>
    {
      item.map((item)=>{return (

    <Quotes key={item.author} author = {item.author} text = {item.text}/>
      )})
    }
    </div>
  );
}

export default App;
