import { useState } from "react";
import "./Home.style.css";
import UserList from "./UserList";
import { dummyUserList } from "./UserData";
import AddUser from "./AddUser";

const Home = () => {
    const [userList, setUserList] = useState(dummyUserList);
    const [shownPage, setShownPage] = useState("list");
    const addUserClickHandler = () => {
        setShownPage("add");
    };
    const showListPage = () => {
        setShownPage("list");
    };
    const addUser = (data) => {
        setUserList([...userList, data]);
    };
    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React Bank</h1>
                </header>
            </article>
            <section className="section-content">
                {shownPage === "list" && (
                    <>
                        <input
                            type="button"
                            value="Add User"
                            onClick={addUserClickHandler}
                        />
                        <UserList list={userList} />
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
