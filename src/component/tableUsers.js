import { Container, Table } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from 'react';

const TableUsers = () => {

    const [users, setUsers] = useState([]);
    const fetchAllUser = async () => {
        let res = await axios.get("http://localhost:8080/users/all")
        let data = res && res.data ? res.data : [];
        setUsers(data);
    }

    const handleDeleteUser = (id) => {

    }

    useEffect(() => {
        fetchAllUser();
    }, []);

    return (
        <>
            <hr />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Password </th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 && users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button className="btn">Update</button>
                                        <button className="btn btn-danger" onClick={handleDeleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default TableUsers;