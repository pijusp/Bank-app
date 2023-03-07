import { useState, useEffect } from "react";
import "./Home.style.css";
import UserList from "./UserList";
import { dummyUserList } from "./UserData";
import AddUser from "./AddUser";
import calculateTotalFunds from "../functions/calculateTotalFunds";
// import FilterUsers from "./FilterUsers";
const Home = () => {
    const [userList, setUserList] = useState(dummyUserList);
    // const [filteredUsers, setFilteredUsers] = useState();
    const [shownPage, setShownPage] = useState("list");

    useEffect(() => {
        const storedUsers = JSON.parse(
            localStorage.getItem("UserList") || "[]"
        );
        setUserList(storedUsers);
    }, []);
    useEffect(() => {
        localStorage.setItem("UserList", JSON.stringify(userList));
    }, [userList]);
    const addUserClickHandler = () => {
        setShownPage("add");
    };
    const showListPage = () => {
        setShownPage("list");
    };
    const deleteUser = (data) => {
        // To Index from array i, e user list
        // Splice that
        // Update new record
        const indexToDelete = userList.indexOf(data);
        const tempList = [...userList];
        tempList.splice(indexToDelete, 1);
        setUserList(tempList);
        alert("User deleted successfully");
    };
    const addUser = (data) => {
        setUserList([...userList, data]);
    };
    return (
        <>
            <article className="article-header">
                <header>
                    <div className="header-center">
                        <h1>React Bank</h1>
                    </div>
                    <div className="statistics">
                        <div className="client-number">
                            Number of clients: {userList.length}
                        </div>
                        <div>
                            Total amount of funds:{" "}
                            {calculateTotalFunds(userList).toFixed(2)} €
                        </div>
                    </div>
                </header>
            </article>
            <section className="section-content">
                {shownPage === "list" && (
                    <>
                        <input
                            type="button"
                            value="Add User"
                            onClick={addUserClickHandler}
                            className="add-user-btn"
                        />
                        {/* <FilterUsers
                            userList={userList}
                            setFilteredUsers={setFilteredUsers}
                        /> */}
                        <UserList
                            list={userList}
                            setUserList={setUserList}
                            onDelete={deleteUser}
                        />
                    </>
                )}
                {shownPage === "add" && (
                    <AddUser onBack={showListPage} onAddUser={addUser} />
                )}
            </section>
        </>
    );
};

export default Home;
