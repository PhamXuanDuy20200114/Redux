import { Container, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserRedux } from "../action/actions";

const FormAddNew = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const isCreateing = useSelector(state => state.user.isCreateing);
    const dispatch = useDispatch();

    const handelCreateNewUser = () => {
        dispatch(createNewUserRedux(email, password, userName));
        setEmail("");
        setPassword("");
        setUserName("");
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email" placeholder="Enter email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password" placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>User's name</Form.Label>
                        <Form.Control
                            type="text-muted" placeholder="User's name"
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary" type="submit"
                        onClick={() => handelCreateNewUser()}
                        disabled={isCreateing}
                    >
                        Submit
                    </Button>
                </Form>
            </Container >
        </>
    )
}

export default FormAddNew;