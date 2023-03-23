
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './../actions/authenticationAction';
import { createAxios } from '../actions/utils/axiosJWT';
import * as type from '../constants/actionTypes';

const Navigation = () => {
    const currentUser = useSelector(state => state.authenReducer.currentUser);
    const dispatch = useDispatch();
    let axiosJWT = createAxios(currentUser, type.LOGIN_SUCCESS, dispatch);
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch(logout(currentUser.user._id, currentUser.accessToken, navigate, axiosJWT));
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">To Do</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link className='active' href="#deets">{currentUser?.user?.userName}</Nav.Link>
                        <Nav.Link onClick={() => handleLogOut()}>
                            Đăng xuất
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;