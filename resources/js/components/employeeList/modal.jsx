import { useState , useEffect } from "react";

export default function Modal(props){
    
    
          //useEffect(()=>{getEmployeeData(props.id)} , [props.id])

    return(
        <>
            
            


            <div className="modal fade" id={`viewModal${props.modalID}`}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <ul>
                            <li> employeeID : {props.data.id} </li>
                            <li> name : {props.data.employee_name} </li>
                            <li> salary : {props.data.salary} </li>
                            <li> created at : {props.data.created_at} </li>
                            <li> last update : {props.data.updated_at} </li>
                        </ul>
                </div>
               
                </div>
            </div>
            </div>

        </>
    )
}
