/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { } from 'firebase/app';
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [hotel, setHotel] = useState([])
    // create user with google
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    // sign out user
    const logOut = () => {
        return signOut(auth)
    }

    // create account with email password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Email and password
    const loggedInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with github
    const githubProvider = new GithubAuthProvider();
    const githubLogin =()=>{
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribed()
        }
    }, [])

    const authInfo = {
        user,
        googleLogin,
        logOut,
        createUser,
        loggedInUser,
        loading,
        githubLogin,
        setUser,
        hotel,
        setHotel
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;