import axios from "axios";
import { update } from "lodash";
import { useState , useEffect } from "react";

export default function UpdateModal(props){

    const [employeeData , setData] = useState({
        
        employee_name : null, 
        salary : null ,
       

    })

    useEffect(()=>{setData(
        {employee_name : props.data.employee_name ,
         salary : props.data.salary
        }

        
        )}  , [props.data])

   

    const handleChange = (e)=>{
        setData(prev=>({...prev , [e.target.name]: e.target.value }))
    }

    //updating employee data
     update = ()=>{
        axios.post('/update' , {
            id : props.data.id , 
            employee_name : employeeData.employee_name , 
            salary : employeeData.salary , 

        }).then(()=>{
            location.reload()
        })
     }
    

    return(
        <>
            
            


            <div className="modal fade" id={`updateModal${props.modalID}`}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h3> employee N° {props.data.id} </h3>

                    <form action="" className="form">
                        <input type="text" className="form-control my-3"
                          name="employee_name"
                          value={employeeData.employee_name ?? ''}
                          onChange={handleChange} />

                        <input type="number" className="form-control my-3"
                        name="salary"
                          value={employeeData.salary ?? '' }
                          onChange={handleChange}
                          />

                    </form>
                        <ul>
                            
                            <li> created at : {props.data.created_at} </li>
                            <li> last update : {props.data.updated_at} </li>
                        </ul>
                        <button className="btn btn-dark" type="button" onClick= {update} > update</button>

                </div>
               
                </div>
            </div>
            </div>

        </>
    )
}
