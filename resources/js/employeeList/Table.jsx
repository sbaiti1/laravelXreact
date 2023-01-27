import axios from "axios";
import map from 'lodash/map';
import React , { Component } from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    
  componentDidMount() {
    axios.get('getData')
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      });
    }
    
    render() {
   
    return(
        <>
            
            
            <table className="table table-hover">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                
                
                {this.state.data.map((x,i)=>{
                    return( <TableRow key={i} {...x} /> )
                })}
               
            </tbody>

            </table>

        </>
    )
    }
}

export default Table ;