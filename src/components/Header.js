import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

export const Header = ()=> {
    return ( 
        <nav>
            <Link to="home">Home</Link>{" | "}
            <Link to="products">Products</Link>
        </nav>
    )
}