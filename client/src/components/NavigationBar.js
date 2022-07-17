import React from 'react'
import {Navbar, Container, NavbarBrand, Nav, NavDropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, reset } from '../redux/userSlice';

const NavigationBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn, userDetails } = useSelector(state => ({
        isLoggedIn: state?.user?.value?.isLoggedIn,
        userDetails: state?.user?.value?.userDetails
    }))
    const handleLogout = () => {
        // dispatch(setUser({
        //     userDetails: {
        //         name: "",
        //         email: ""
        //     },
        //     isLoggedIn: false
        // }))
        dispatch(reset())
        localStorage.removeItem('token')
        navigate('/')
    }
    console.log('user', userDetails)
    console.log('islogged', isLoggedIn);
    const handleLogoClick = () => {
        if(isLoggedIn){
            navigate('/home')
        }
        else {
            navigate('/')
        }
    }
    return (
        <div>
            {/* <Navbar style={{backgroundColor:'#8b8d72'}} variant="dark"> */}
            {/* <Navbar style={{backgroundColor:'#fff'}} variant="light">
                <Container>
                    <Navbar.Brand href="/">DooDoo</Navbar.Brand>
                </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand style={{cursor: 'pointer'}} onClick={handleLogoClick}>DooDoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {!isLoggedIn ?
                            <Nav>
                                <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                                <Nav.Link onClick={() => navigate('/signup')}>
                                    Sign up
                                </Nav.Link>
                            </Nav>
                        :
                            <Nav>
                                <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link>
                                <Nav.Link onClick={handleLogout}>Sign out</Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
