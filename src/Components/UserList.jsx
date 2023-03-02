import React from "react";
import "./UserList.style.css";
const UserList = ({ list }) => {
    return (
        <div>
            This is employee list page
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(({ id, firstName, lastName, balance }) => {
                        return (
                            <tr key={id}>
                                <td>{`${firstName}`}</td>
                                <td>{`${lastName}`}</td>
                                <td>{`${balance}`}</td>
                                <td>Actions</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;