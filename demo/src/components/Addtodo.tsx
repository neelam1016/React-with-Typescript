import React, { useState,ChangeEvent } from 'react';
import ITodoData from '../types/todo';
import {useNavigate} from 'react-router-dom'
import TodoService from '../services/TodoServices';
const Addtodo:React.FC=()=>{
    const initialState={
        title:"",description:""
    }
    const [todo,setTodo]=useState<ITodoData>(initialState);
    const navigate=useNavigate();
    const handler=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setTodo({...todo,[name]:value})
    }
    const handleSubmit=(event:any)=>{
        event.preventDefault();
        TodoService.create(todo)
        .then((res:any)=>{
          if(res){
            alert("Todo Added");
            navigate("/")
          }
        })
    }
  
    return(
        <>
        <h2> Add Todo List</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label> Title</label>
              <input type="text" name="title" className="form-control" onChange={handler}/>
            </div>
            <div className="form-group">
              <label> Description</label>
              <input type="text" name="description" className="form-control" onChange={handler}/>
            </div>
            <input type="submit" value="Add" className="btn btn-success"/>
        </form>
      </>
    )
}
export default Addtodo;