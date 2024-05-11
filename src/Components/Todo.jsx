import { useState } from 'react'
import './css/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import Todoitems from './Todoitems';

let count =0;
const Todo = () => {
  const [todos,setTodos]=useState([]);
  const inputRef =useRef(null);

  const add= () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
                inputRef.current.value="";
                
  }
  useEffect(() =>{
    console.log(todos);
  },[todos])


  return (

       <div className='todo'>
        <div className='todo-header'>TO-Do-list</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add your Task' className='todo-input'/>
            <div onclick={()=>{add()}} className="todo-add-btn">Add </div>
        </div>
        <div className='"todo-list'>
            {todos.map((item,index)=>{  
              return <Todoitems key={index} no={item.no} display={item.display} text={item} />
            })}
        </div>
    </div>
  )
}

export default Todo
