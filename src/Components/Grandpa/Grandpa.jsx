import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';

const Grandpa = () => {
    const ring='diamond';
    return (
        <div className='grandpa'>
            <h2>grandpa page</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Unty ring={ring}></Unty>
            </section>
        </div>
    );
};

export default Grandpa;