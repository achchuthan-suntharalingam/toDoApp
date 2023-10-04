import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './ToDo.css'


function formatDate(createdAt) {
    const options = {month: 'short', day: 'numeric'};
    const date = new Date(createdAt);
    return date.toLocaleDateString('en-GB',options);
  }

const ToDo = () => {

    const[list, setList] = useState([]);

    const handleMarkAsDone = (id) => {
        const index = list.findIndex((list) => list.id === id);    
        if (index !== -1) {
          const updatedList = [...list];
          updatedList[index].completed = true;
          setList(updatedList);
        }
      };
    

    useEffect(()=>{
        const API_URL = `${process.env.REACT_APP_API}`;

        const getList = async() => {
            try{
                const response= await axios.get(API_URL)
                setList(response.data);
                console.log(response.data)
            }
            catch(error){
                console.log("Error")
            }
        }
        getList();
    },[]);

  return (
    <div>
        <div className="container">
            <h1>Tasks</h1>
                <ul className="list-group">
                    {list.map((todo, index) => (
                    <li key={index} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="todo-text">{todo.todo}</div>
                            <div className="d-flex flex-column align-items-end">
                                <div className={`status badge ${todo.completed === true ? 'bg-success' : 'bg-warning'}`}>
                                    {todo.completed ? 'Done' : 'In Process'}
                                </div>
                                {!todo.completed && (
                                    <button className="btn btn-success" onClick={() => handleMarkAsDone(todo.id)}>Mark as done</button>
                                    )}
                                <div className="created-date">{formatDate(todo.createdAt)}</div>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>
    </div>
      
  )
}

export default ToDo
