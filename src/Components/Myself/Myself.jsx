import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
           <h2>myself page</h2> 
           <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;