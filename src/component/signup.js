import React from 'react';
import './../css/signup.css';

function SignUp() {
    return(
        <section>
            <form className="signup">
                <h1 className="signup-title">REGISTER</h1>

                <div className="signup-item">
                    <img className="signup-item__profile" src="/images/user-default.png" alt="user-profile" />
                    <input type="file" /><br />
                    <input className="signup-item__email" placeholder="Email *" />
                    &nbsp;&nbsp;<button className="btn">중복확인</button><br />
                    <input className="signup-item__nickname" placeholder="Nickname *" />
                    &nbsp;&nbsp;<button className="btn">중복확인</button><br />
                    <input className="signup-item__password" type="password" placeholder="Password * " /><br />
                    <input className="signup-item__password-re" type="password" placeholder="Password Check * " />
                </div>

                <div className="signup-button"> 
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </section>
    )
}

export default SignUp;