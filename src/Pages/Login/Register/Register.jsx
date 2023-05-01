/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const auth = getAuth(app)
const Register = () => {
    const { createUser, setUser, user } = useContext(AuthContext);

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target
        const firstName = form.fName.value;
        const lastName = form.lName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const fullName = firstName + " " + lastName;
        // console.log(fullName);
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    // const user = result.user;
                    setUser({...user,displayName:fullName})

                    updateUserName(fullName)
                    
                    console.log(user);
                })
                .catch(error => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                })
        }else{
            console.log('Password does not match');
        }
    }

    // update use name and photoUrl
    const updateUserName = (fullName)=>{
        updateProfile(auth.currentUser, {
            displayName : fullName

        })
        
    }
    return (
        <Container className='w-50  mt-4 mb-4'>
            <div className='border rounded'>
                <Form className='p-4' onSubmit={handleRegisterForm}>
                    <h2 className='mb-4'>Register</h2>

                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Control type="text" className='border-none' name='fName' placeholder="first name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" className='border-none' name='lName' placeholder="last name " />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control type="email" className='border-none' name='email' placeholder="Username or Email " />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" >

                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-4">

                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
                    </Form.Group>

                    <Button variant="warning" className='w-100' type="submit">
                        Register
                    </Button>
                    <div className='text-center mt-2'>
                        <p>Already  have account?
                            <Link className='text-warning' to='/login/login'>Login</Link>
                        </p>
                    </div>
                </Form>
            </div>
            <div className=' text-center'>

                <h5>Or</h5>

                <div className=''>
                    <Button variant="outline-secondary" className='w-75 rounded-pill'>
                        <FaGithub className=' fs-3 me-4'></FaGithub>
                        Continue With Google</Button>
                    <br />
                    <Button variant="outline-secondary" className='mt-2 w-75  rounded-pill'>

                        <FaFacebook className='text-primary fs-3 me-4'></FaFacebook>

                        Continue With Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Register;