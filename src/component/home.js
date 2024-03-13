import { Form, Table } from "react-bootstrap";
import Header from "./header";
import FormAddNew from "./formAddNew";
import TableUsers from "./tableUsers";

const Home = () => {
    return (
        <>
            <Header />
            <FormAddNew />
            <TableUsers />
        </>
    );
}

export default Home;