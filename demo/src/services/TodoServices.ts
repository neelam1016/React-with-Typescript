import http from '../http';
import ITodoData from '../types/todo';
const getAll=()=>{
     return http.get<Array<ITodoData>>("/todo");
}
const getById=(id:any)=>{
   return http.get<ITodoData>(`/todo/${id}`)
}
const create=(data:ITodoData)=>{
    return http.post<ITodoData>(`/todo`,data)
}
const remove=(id:any)=>{
    return http.delete<any>(`/todo/${id}`)
}
const update=(id:any,data:ITodoData)=>{
     return http.put<any>(`/todo/${id}`,data)
}
const TodoService={getAll,getById,create,remove,update}
export default TodoService;