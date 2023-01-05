import React from 'react'
import UserForm from './User_Form1';
import UserTable from './User_Table1';

const Registration = () => {
    const [user,setUser]=useState([])
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <UserForm
                        user={user}
                        handleChange={handleChange}

                    />
                </div>
                <div className="col-8">
                    <UserTable
                        users={users}

                    />
                </div>
            </div>
        </div>
    )
}
export default Registration;