
import './App.css'
import {useState} from 'react'
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setToDo] =useState('')
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Monday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text: toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
     { toDos.map((obj)=>{

      return (<div className="todo">
        <div className="left">
          <input onChange={(e)=>{
             
             setToDo(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
             }))

          }} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i onClick={()=>{
            setTodos(toDos.filter(obj3=>{
              if(obj!==obj3){
                return obj3
              }
            }))
          }}
           className="fas fa-times"></i>
        </div>
      </div> )
     }) }

     {toDos.map((obj)=>{
      if(obj.status){
        return(<h1>{obj.text}</h1>)
      }
     
     })}

    </div>

  </div>
  );
}

export default App;
