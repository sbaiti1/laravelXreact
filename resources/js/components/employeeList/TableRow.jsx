import ActionsButtons from "./TableActionsBtns";

export default function TableRow(props){

    return(
        <>
            <tr>
                    <th> {props.id} </th>
                    <td> {props.employee_name} </td>
                    <td> {props.salary} </td>
                    <td> <ActionsButtons rowID = {props.id}/>  </td>
                    </tr>
        </>
    )
}