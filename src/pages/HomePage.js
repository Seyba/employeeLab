import EmployeeList from "../components/EmployeeList"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"


const HomePage = () => {
    return(
        <div>
            <Header />
            <SearchBar/>
            <EmployeeList/>
        </div>
    )
}
export default HomePage