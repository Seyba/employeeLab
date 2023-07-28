import EmployeeListItem from "./EmployeeListItem"
import { employeeData } from "../helper/employeeData"

const EmployeeList = (props) => {
    return(
        <div>
            {employeeData.map(employee => <EmployeeListItem employee={employee} key={employee.id}/>)}
        </div>
    )
}

export default EmployeeList