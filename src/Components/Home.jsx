import { useState } from "react";
import "./Home.style.css";
import UserList from "./UserList";
import { dummyEmployeeList } from "./UserData";

const Home = () => {
    const [userList, setUserList] = useState(dummyEmployeeList);
    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React Bank</h1>
                </header>
            </article>
            <section className="section-content">
                <div>This is content part</div>
                <UserList list={userList} />
            </section>
        </>
    );
};

export default Home;
