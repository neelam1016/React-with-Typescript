import React, { useState,ChangeEvent, useEffect } from 'react';
import ITodoData from '../types/todo';
import {useNavigate} from 'react-router-dom'
import TodoService from '../services/TodoServices';
import {useParams} from 'react-router-dom'
const Updatetodo:React.FC=()=>{
    const initialState={
        title:"",description:""
    }
    const [todo,setTodo]=useState<ITodoData>(initialState);
    const navigate=useNavigate();
    const params = useParams()
    useEffect(()=>{
        TodoService.getById(params.id)
        .then((res:any)=>{
            setTodo(res.data);
        })
        .catch((e:Error)=>{
            console.log(e)
        })
    },[])
    const handler=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setTodo({...todo,[name]:value})
    }
    const handleSubmit=(event:any)=>{
        event.preventDefault();
        console.log(params.id)
        TodoService.update(params.id,todo)
        .then((res:any)=>{
          if(res){
            alert("Todo Updated");
            navigate("/")
          }
        })
    }
    return(
        <>
        <h2> Update Todo List</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label> Title</label>
              <input type="text" name="title" className="form-control" value={todo.title} onChange={handler}/>
            </div>
            <div className="form-group">
              <label> Description</label>
              <input type="text" name="description" className="form-control" value={todo.description} onChange={handler}/>
            </div>
            <input type="submit" value="Add" className="btn btn-success"/>
        </form>
      </>
    )
}
export default Updatetodo;