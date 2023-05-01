// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;