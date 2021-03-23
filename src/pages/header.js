import React from 'react';
import './../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="header__title">
                <h1>
                    <Link to='/main'>
                        나만고양이없어&nbsp;
                        <span>VER.1</span>
                    </Link>
                </h1>
            </div>
            <div className="header__menu">
                <ul>
                    <li>
                        <Link to='/login'>로그인</Link>
                    </li>
                    <li>
                        <Link to='/signup'>회원가입</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;