import React from 'react';
import './../css/header.css';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <div className="header__title">
                <h1 as={Link} to="/main">
                    🐱 나만고양이없어&nbsp;
                    <span>VER.1</span>
                </h1>
            </div>
            <div className="header__menu">
                <ul>
                    <li as={Link} to="/login">로그인</li>
                    <li as={Link} to="/signup">회원가입</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;