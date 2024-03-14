import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';
import { deleteUserRedux } from "../action/actions";

const TableUsers = () => {
    const dispatch = useDispatch();

    const listUsers = useSelector(state => state.user.listUsers);
    const isLoading = useSelector(state => state.user.isLoading);
    const isError = useSelector(state => state.user.isError);

    const handleDeleteUser = (id) => {
        dispatch(deleteUserRedux(id));
        dispatch(fetchAllUsers());
    }

    // const fetchAllUser = async () => {
    //     try {
    //         let res = await axios.get("http://localhost:8080/users/all")
    //         let data = res && res.data ? res.data : [];
    //         setListUsers(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        //fetchAllUser();
        dispatch(fetchAllUsers());
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
                        {isError === true ?
                            <tr><td colSpan="4">Something wrongs, please try again ...</td></tr>
                            :
                            <>
                                {isLoading === true ?
                                    <tr><td colSpan="4">Loading ...</td></tr>
                                    :
                                    <>
                                        {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>{user.username}</td>
                                                    <td>
                                                        <button className="btn">Update</button>
                                                        <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                }
                            </>
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default TableUsers;