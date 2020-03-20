import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div class="topnav">
            <a class="active"><Link to='/'>Home</Link></a>
            <a class="link__nav"><Link to='/generate'>Generate</Link></a>
            <a><Link to='/discover'>Discover</Link></a>
        </div>
    );
};

export default NavBar;