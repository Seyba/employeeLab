const EmployeeListItem = (props) => {
    const {employee } = props
    const { name, title} = employee

    return(
        <div className="border border-danger mb-1 ">
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    )
}
export default EmployeeListItem