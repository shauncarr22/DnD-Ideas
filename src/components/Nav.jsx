import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
       <header>
           <h1 className="logo"><Link to="/">DnD Ideas</Link></h1>
           <nav>
               <ul className="nav__links">
                   <li><Link to="/generate">Generate</Link></li>
               </ul>
           </nav>
       </header>
       </div>
    )
};

export default NavBar;