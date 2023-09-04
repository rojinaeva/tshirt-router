import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>uncle page</h3>
            <section className='flex'>
                <Cousin>nabila</Cousin>
                <Cousin>sabila</Cousin>
                <Cousin>kabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;