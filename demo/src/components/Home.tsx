import React, { useState, useEffect } from "react";
import TodoService from "../services/TodoServices";
import ITodoData from "../types/todo";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const [todo, setTodo] = useState<Array<ITodoData>>([]);
  const navigate = useNavigate();
  useEffect(() => {
    TodoService.getAll()
      .then((res: any) => {
        setTodo(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  const delTodo = (id: any) => {
    if (window.confirm("Do u want to delete")) {
      TodoService.remove(id).then((res: any) => {
        if (res) {
          alert("Todo Deleted");
          let data = todo.filter((res: any) => res.id != id);
          setTodo(data);
        }
      });
    }
  };
  return (
    <>
      <h2>Todo List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todo &&
            todo.map((mytodo, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{mytodo.title}</td>
                <td>{mytodo.description}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => window.location(`/updatetodo/${mytodo.id}`)}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => delTodo(mytodo.id)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
