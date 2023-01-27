
export default function TableRow(props){

    return(
        <>
            <tr>
                    <th> {props.id} </th>
                    <td> {props.employee_name} </td>
                    <td> {props.salary} </td>
                    <td>@mdo</td>
                    </tr>
        </>
    )
}