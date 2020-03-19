import React from 'react';
import Link from 'react-router-dom';


const Nav = () => {
    return (
        <div>
       <header>
           <h1><Link to="/">DnD Ideas</Link></h1>
           <nav>
               <ul>
                   <li><Link to="/generate">Generate</Link></li>
               </ul>
           </nav>
       </header>
       </div>
    )
};

export default Nav;