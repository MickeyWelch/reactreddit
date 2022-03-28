import React from 'react';
import {NavLink} from "react-router-dom";

function Header({logo, title, subtitle}) {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/subreddit/subredditId'>Subreddit</NavLink></li>
                </ul>
            </nav>
            <div>
                {logo && <img src={logo} alt={title} width="100px"/>}
                {title && <h1>{title}</h1>}
                {subtitle && <h2>{subtitle}</h2>}
            </div>
        </header>
    );
}

export default Header;