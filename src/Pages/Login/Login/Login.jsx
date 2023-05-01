/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {googleLogin,loggedInUser,githubLogin} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate  = useNavigate()
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            const user = result.user;
            navigate(from)
            console.log(user);
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    const handleSignInEmailPassword =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loggedInUser(email,password)
        .then(result=>{
            const user = result.user;
            navigate(from)

            console.log('successfully log in',user);
            
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    // github Login 
    const handleGithubLogin =()=>{
        githubLogin()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
  
    return (
        <Container className='w-50  mt-4'>
            <div className='border rounded'>
                <Form className='p-4' onSubmit={handleSignInEmailPassword}>
                    <h2 className='mb-4'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" className='border-none' name='email' placeholder="Username or Email " />

                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Link className='text-warning'>Forget Password</Link>
                    </div>
                    <Button variant="warning" className='w-100' type="submit">
                        Login
                    </Button>
                    <div className='text-center mt-2'>
                        <p>Don't have account?
                            <Link className='text-warning' to='/login/register'>Create an account</Link>
                        </p>
                    </div>
                </Form>
            </div>
            <div className=' text-center'>

                <h5>Or</h5>

                <div className=''>
                    <Button variant="outline-secondary" onClick={handleGoogleLogin} className='w-75 rounded-pill'>
                    <FaGoogle className='text-secondary fs-3 me-4'></FaGoogle>
                        
                        Continue With Google</Button>
                    <br />
                    <Button variant="outline-secondary" onClick={handleGithubLogin} className='mt-2 w-75  rounded-pill'>
                    <FaGithub className=' fs-3 me-4'></FaGithub>
                        

                        Continue With Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;