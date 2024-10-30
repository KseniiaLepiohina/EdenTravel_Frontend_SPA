import React from 'react';
import logo from '../assets/logo.svg';

export default function Header () {

    return(
        <header>
            <img src={logo} alt='header'/>
            
                <nav>
                    <li>
                        Home
                    </li>
                    <li>
                        Tour
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Pages
                    </li>
                    <li>
                       Contact 
                    </li>
                    
                </nav>
             </header>
       
    )
}