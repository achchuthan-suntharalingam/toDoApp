import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './ToDo.css'
import Pagination from 'react-js-pagination';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


function formatDate(createdAt) {
    const options = {month: 'short', day: 'numeric'};
    const date = new Date(createdAt);
    return date.toLocaleDateString('en-GB',options);
  }

  const priorityColors = {
    "HIGH": 'red',
    "MEDIUM": 'yellow',
    "LOW": 'blue',
  };
  
const ToDo = () => {

    const[list, setList] = useState([]);

    const taskCountsByPriority = {
        HIGH: list.filter((item) => item.priority === 'HIGH').length,
        MEDIUM: list.filter((item) => item.priority === 'MEDIUM').length,
        LOW: list.filter((item) => item.priority === 'LOW').length,
      };
    
      // Create data for the Pie chart
      const pieChartData = {
        labels: ['HIGH', 'MEDIUM', 'LOW'],
        datasets: [
          {
            data: [taskCountsByPriority.HIGH, taskCountsByPriority.MEDIUM, taskCountsByPriority.LOW],
            backgroundColor: ['red', 'yellow', 'blue'],
          },
        ],
      };

    // status change button
    const handleMarkAsDone = (id) => {
        const index = list.findIndex((list) => list.id === id);    
        if (index !== -1) {
          const updatedList = [...list];
          updatedList[index].completed = true;
          setList(updatedList);
        }
      };

    // pagination function
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(8);

    // Paginate tasks
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = list.slice(indexOfFirstTask, indexOfLastTask);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
            <p className='heading'>Tasks</p>

                <ul className="list-group">

                    {currentTasks.map((todo, index) => (
                    <li key={index} className="list-group-item">

                        <div className="d-flex justify-content-between align-items-center">
                            <div className='group1737' >
                                <img id="bell" src="/icons/bell.png" alt="bell" style={{backgroundColor: priorityColors[todo.priority]}}></img>
                            </div>
                            <div className="todo-text">{todo.todo}</div>

                            <div className="d-flex flex-column align-items-end">
                                <div className={`status badge ${todo.completed === true ? 'Done' : 'InProcess'}`}>
                                    <p className='label'>{todo.completed ? 'Done' : 'InProcess'}</p>
                                </div>

                                {!todo.completed && (
                                    <button className="btn" onClick={() => handleMarkAsDone(todo.id)}>Mark as done</button>
                                    )}

                                <div className="created-date">{formatDate(todo.createdAt)}</div>
                            </div>

                        </div>

                    </li>
                    ))}

                </ul>

                <div className="pagination">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={tasksPerPage}
                        totalItemsCount={list.length}
                        pageRangeDisplayed={3}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="active"
                    />
                </div>
        </div>
        <div className="chart-container">
            <div className="container-header">
                <p id="chartheading">Task Priorities</p>
            </div>
            <div className="group1769">
                <div className='group1768'>
                    <div className="pie-chart">
                        <Doughnut data={pieChartData} />                  
                    </div>
                </div>
                <div className='legend'>
                    <ul className='legendhigh'>
                        <li id="high"><span>High</span></li>
                    </ul>
                    <ul className='legendmedium'>
                        <li id="high"><span>Medium</span></li>
                    </ul>
                    <ul className='legendlow'>
                        <li id="high"><span>Low</span></li>
                    </ul>
                </div>
            </div>
        </div>
        


        
    </div>
      
  )
}

export default ToDo
