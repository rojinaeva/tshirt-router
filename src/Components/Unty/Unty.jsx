import React from 'react';
import Cousin from '../Cousin/Cousin';

const Unty = ({ring}) => {
    return (
        <div>
            <h3>unty page</h3>
            <section className='flex'>
                <Cousin hasFriend={true} ring={ring}>habul</Cousin>
                <Cousin>kabul</Cousin>
                <Cousin>abul</Cousin>
            </section>
        </div>
    );
};

export default Unty;