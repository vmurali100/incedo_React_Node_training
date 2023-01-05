import React from 'react'

export default function Table({ users, showCompany, hideCompany, showAddress, hideAddress, addressChecker, companyChecker }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Operation1</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Operation2</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            {addressChecker ? (<p>click here</p>) :
                                (<div>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.street}</td>
                                </div>)
                            }
                        </td>
                        <td>
                            {addressChecker ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={showAddress}
                                >
                                    Show Details
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={hideAddress}
                                >
                                    Hide Details
                                </button>
                            )}
                        </td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>
                            {companyChecker ? (<p>chick here</p>) : (
                                <p>
                                    {JSON.stringify(user.address)}
                                </p>
                            )}
                        </td>
                        <td>
                            {companyChecker ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={showCompany}
                                >
                                    Show Company
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={hideCompany}
                                >
                                    Hide Company
                                </button>
                            )}
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
