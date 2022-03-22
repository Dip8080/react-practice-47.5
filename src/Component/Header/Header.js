import React from 'react';
import { addition } from '../Calculator/Calculator';
import('./Header.css')
const Header = () => {
    return (
        <div className='header'>
            <h1>This is just a Header line {addition(3,4)}</h1>
        </div>
    );
};

export default Header;