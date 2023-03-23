import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { login, loginReset } from "../actions/authenticationAction";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let state = useSelector(state => state.authenReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(loginReset())
    }, [dispatch])
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password, navigate));
    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">To Do - Đăng nhập</h2>
                                    <p className=" mb-3">Điền thông tin đăng nhập!</p>
                                    {state.login_Error === true ? <p className=" mb-3 text-danger">Email hoặc mật khẩu không chính xác!</p> : ''}
                                    <div className="mb-3">
                                        <Form onSubmit={onSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email
                                                </Form.Label>
                                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Mật khẩu</Form.Label>
                                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                                {/* <p className="small">
                                                    <a className="text-primary" href="#!">
                                                        Forgot password? { }
                                                    </a>
                                                </p> */}
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Đăng nhập
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Bạn chưa có tài khoảng?&nbsp;
                                                <a href="/register" className="text-primary fw-bold">
                                                    Đăng ký
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;