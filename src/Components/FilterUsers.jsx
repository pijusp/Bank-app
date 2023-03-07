import React from "react";

const FilterUsers = ({ userList, setFilteredUsers }) => {
    const filterWithBalance = () => {
        console.log(userList);
        const usersWithBalance = userList.filter((user) => user.balance > 0);
        console.log(usersWithBalance);
        setFilteredUsers(usersWithBalance);
    };
    const filterWithNoBalance = () => {
        const usersWithNoBalance = userList.filter(
            (userList) => (userList.balance = 0)
        );
        setFilteredUsers(usersWithNoBalance);
    };
    const clearFilter = () => {
        setFilteredUsers(userList);
    };
    return (
        <div>
            <button onClick={filterWithBalance}>Active Users</button>
            <button onClick={filterWithNoBalance}>Inactive Users</button>
            <button onClick={clearFilter}>All Users</button>
        </div>
    );
};

export default FilterUsers;
