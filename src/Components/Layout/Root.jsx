import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster
            toastOptions={{
                className: '',
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
              }} />

        </div>
    );
};

export default Root;