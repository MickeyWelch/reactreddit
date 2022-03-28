import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

function Header({logo, title, subtitle}) {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/subreddit/subredditId'>Subreddit</NavLink></li>
                    </ul>
                </nav>
                <div className="header-content">
                    {logo && <img src={logo} alt={title} width="100px"/>}
                    {title && <h1>{title}</h1>}
                    {subtitle && <p>{subtitle}</p>}
                </div>
            </div>
        </header>
    );
}

export default Header;