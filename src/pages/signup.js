import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './../css/signup.css';

const  Signup = () => {
    const { register, handleSubmit, errors, setError } = useForm({
        mode: 'onBlur'
    });
    const [emailValue, setEmailValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [nicknameValue, setNicknameValue] = useState();
    const onSubmit = data => console.log(data);

    const emailCheck = () => {
        console.log(emailValue);

        // DB에 입력된 ID와 비교하여 없으면 통과, 중복될 경우 error

        // const dbEmailValue = '';

        // if (emailValue === dbEmailValue) {
        //     setError("email", {   
        //         message : "이미 가입된 이메일 입니다."
        //     });

        // }else{
        //     setError("email", {   
        //         message : "가입이 가능한 이메일 입니다"
        //     });
        // }
    }

    const nicknameCheck = () => {
        console.log(nicknameValue);
    }

    const passwordCheck = (e) => {
        const rePassword = e.target.value;

        console.log(rePassword);
        console.log(passwordValue);

        if (passwordValue === rePassword) {
            return;
        } else {
            setError("password2", {   
                message : "패스워드가 일치하지 않습니다"
            });
        }
    }

    return(
        <section>
            <form className="signup" onSubmit={ handleSubmit(onSubmit) }>
                <h1 className="signup-title">REGISTER</h1>

                <div className="signup-item">
                    <img className="signup-item__profile" src="/images/user-default.png" alt="user-profile" />
                    <input type="file" name="profile" /><br />
                    <input type="email" name="email" className="signup-item__email" placeholder="Email *" 
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: "이메일을 입력 해주세요"},
                                minLength: {
                                        value: 5,
                                        message: "이메일은 최소 5자리 이상 입력 해주세요"},
                                maxLength: {
                                        value: 20,
                                        message: "이메일은 최대 20글자 이내로 입력 해주세요"},
                                pattern: {
                                        value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                                        messeage: "이메일 형식에 맞추어 입력 해주세요"
                                }
                            })
                         } onChange={ (e) => { setEmailValue(e.target.value) } } />
                    &nbsp;&nbsp;<button type="button" className="btn" onClick={ emailCheck }>중복확인</button><br />
                    <p className="signup-error-msg">
                     {errors.email && errors.email.message}
                    </p><br />

                    <input type="text" name="nickname" className="signup-item__nickname" placeholder="Nickname *" 
                          ref={
                            register({
                                required: {
                                    value: true,
                                    message: "닉네임을 입력 해주세요"},
                                minLength: {
                                        value: 2,
                                        message: "닉네임은 최소 2자리 이상 입력 해주세요"},
                                maxLength: {
                                        value: 10,
                                        message: "닉네임은 최대 10글자 이내로 입력 해주세요"}
                            })
                         } onChange={ (e) => { setNicknameValue(e.target.value) } } />
                    &nbsp;&nbsp;<button type="button" className="btn" onClick={ nicknameCheck }>중복확인</button><br />
                    <p className="signup-error-msg">
                     {errors.nickname && errors.nickname.message}
                    </p><br />

                    <input type="password" name="password"  className="signup-item__password" placeholder="Password *"
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: "패스워드를 입력 해주세요"},
                                minLength: {
                                        value: 8,
                                        message: "패스워드는 8자리 이상 20자리 이하 입력"},
                                maxLength: {
                                        value: 20,
                                        message: "패스워드는 8자리 이상 20자리 이하 입력"}
                            })
                         } onChange={ (e) => { setPasswordValue(e.target.value) } }  /><br />
                    <p className="signup-error-msg">
                     {errors.password && errors.password.message}
                    </p><br />

                    <input type="password" name="password2"  className="signup-item__password-re"  placeholder="Password Check *"
                     ref={
                        register({
                            required: {
                                value: true,
                                message: "패스워드를 다시 입력 해주세요"}
                        })
                     } onChange={ (e) => { passwordCheck(e) } } /><br />
                    <p className="signup-error-msg">
                     {errors.password2 && errors.password2.message}
                    </p><br />
                </div>

                <div className="signup-button"> 
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </section>
    )
}

export default Signup;