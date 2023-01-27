import axios from "axios"
import { useState } from "react";
import Modal from "./modal";
export default function  ActionsButtons(props){
    const [employeeData , setData] = useState({
     
    });
    const getEmployeeData = (id)=>{
        axios.post('/getEmployeeData' , {employeeID : id})
            .then(response => {
            setData(response.data); 
            //console.log(response.data);
          });

        }
   
    return(
        <>
            <div className="d-grid gap-2 d-md-flex">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#viewModal${props.rowID}`} onClick={()=>{getEmployeeData(props.rowID)}}  >
                view
                </button>
                <Modal modalID={props.rowID} data={employeeData} />

                <button className="btn btn-warning" type="button"> <a className="text-light" href={`/edit/${props.rowID}`} >edit</a> </button>
                <button className="btn btn-danger" type="button">Delete</button>
            </div>
        </>
    )
}