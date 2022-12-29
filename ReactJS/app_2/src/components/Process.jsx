import React from 'react'
import { useState } from 'react';
import Table from './Table';

import axios from "axios";
import { useEffect } from 'react';

export default function Process() {
    const [users, setUsers] = useState([]);
    const [addressChecker, setAddressChecker] = useState(true);
    const [companyChecker, setCompanyChecker] = useState(true);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data);
        });
    };

    const showAddress = () => {
        setAddressChecker(false);
    }

    const hideAddress = () => {
        setAddressChecker(true);
    }

    const showCompany = () => {
        setCompanyChecker(false);
    }

    const hideCompany = () => {
        setCompanyChecker(true);
    }
    return (
        <div>
            <Table
                users={users}
                showAddress={showAddress}
                hideAddress={hideAddress}
                showCompany={showCompany}
                hideCompany={hideCompany}
                addressChecker={addressChecker}
                companyChecker={companyChecker} />
        </div>
    )
}
