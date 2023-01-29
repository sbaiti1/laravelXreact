import axios from "axios"
import { useState } from "react";
import Modal from "./modals/modal";
import UpdateModal from "./modals/updateModal";
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
                {/* view */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#viewModal${props.rowID}`} onClick={()=>{getEmployeeData(props.rowID)}}  >
                view
                </button>
                <Modal modalID={props.rowID} data={employeeData} />
                {/* end of view */}

                {/* update */}
         
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#updateModal${props.rowID}`} onClick={()=>{getEmployeeData(props.rowID)}}  >
                update
                </button>
                <UpdateModal modalID={props.rowID} data={employeeData} />

                {/* end of update */}

                {/* view */}
                <button className="btn btn-danger" type="button">Delete</button>
            </div>
        </>
    )
}