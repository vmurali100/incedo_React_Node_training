import { useEffect,useState } from "react";
import Table from './Table';
import axios from "axios";
const Task = () => {
    const [user,setUser]=useState({ Id: "", Name: "", Username: "", Email: "", Address: "", Phone: "", Website: "", Company: "" });
    const [users, setUsers] =useState([])     
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data);
        });
    };
    const showAddress=(user)=>{
        
        
            let allUsers = [...users];
            allUsers.forEach((usr) => {
              if (user.id === usr.id) {
                usr.showAddress = !usr.showAddress;
              }
            });
            setUsers(allUsers);
          


    }
    const showCompany=()=>{
        

    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <Table
                        users={users}
                         showAddress={showAddress}
                         showCompany={showCompany}
                        />
                </div>
            </div>
        </div>
    )
}
export default Task;