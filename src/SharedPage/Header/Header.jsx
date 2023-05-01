/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/icons/calender_icon.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut,loading } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
        .then(()=>{
            console.log('successfully logout');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href="#">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Form className="ms-4">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />

                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className=''>News</Nav.Link>
                        <Nav.Link href="#action2" className=''>Destination</Nav.Link>
                        <Nav.Link href="#action2" className=''>Blog</Nav.Link>
                        <Nav.Link href="#action2" className=''>Contact</Nav.Link>
                        
                        {
                            user ?
                                <>
                                <span className='p-2 text-warning'>WelCome, { user && user.displayName }</span>
                                
                                <Button variant='warning' onClick={handleLogOut} >LogOut</Button>
                                </> :
                                <Link to='/login/login'><Button variant='warning' >Login</Button></Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;