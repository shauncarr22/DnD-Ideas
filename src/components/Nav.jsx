import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="topnav">
            <a className="active"><Link to='/'>Home</Link></a>
            <a className="link__nav"><Link to='/generate'>Generate</Link></a>
            <a><Link to='/discover'>Discover</Link></a>
            <a className="link__About"><Link to='/contact'>Contact</Link></a>
        </div>
    );
};

export default NavBar;