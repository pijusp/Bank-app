import { useState, useEffect } from "react";
import "./Home.style.css";
import UserList from "./UserList";
import { dummyUserList } from "./UserData";
import AddUser from "./AddUser";
import calculateTotalFunds from "../functions/calculateTotalFunds";
const Home = () => {
    const [userList, setUserList] = useState(dummyUserList);
    const [shownPage, setShownPage] = useState("list");
    useEffect(() => {
        const listInString = window.localStorage.getItem("UserList");
        if (listInString) {
            _setUserList(JSON.parse(listInString));
        }
    }, []);
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
        _setUserList(tempList);
    };
    const _setUserList = (list) => {
        setUserList(list);
        window.localStorage.setItem("UserList", JSON.stringify(list));
    };
    const addUser = (data) => {
        _setUserList([...userList, data]);
    };
    return (
        <>
            <article className="article-header">
                <header>
                    <div>
                        <h1>React Bank</h1>
                    </div>
                    <div className="statistics">
                        <div>Number of clients:{userList.length}</div>
                        <div>
                            Total amount of funds:
                            {calculateTotalFunds(userList)}
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
