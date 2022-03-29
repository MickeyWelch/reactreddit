import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

function Header({logo, title, subtitle}) {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li><NavLink to='/'>Hottest posts</NavLink></li>
                        <li><NavLink to='/subreddit/reddit'>Reddit</NavLink></li>
                        <li><NavLink to='/subreddit/memes'>Memes</NavLink></li>
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