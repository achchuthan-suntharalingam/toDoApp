import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const ToDo = () => {

    const[list, setList] = useState([]);
    useEffect(()=>{
        const API_URL = `${process.env.REACT_APP_API}`;

        const getList = async() => {
            try{
                const response= await axios.get(API_URL)
                setList(response.data.Array);
                console.log(response.data)

            }
            catch(error){
                console.log("Error")
            }
        }
        getList();
    },[]);

  return (
    <div className="App">
         

    </div>
      
  )
}

export default ToDo
