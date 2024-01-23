import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/users/operations";
import img_logo_icon from '../assets/img/icon-logo.svg'
import img_close_icon from '../assets/img/icon-close.svg'
import { MainImage } from "../components/common/MainImage";
import { useNavigate } from "react-router";


const SignUp = () => {
    const dispatch=useDispatch()
    const closeButton=useNavigate('/')

    const [username, setUserName]= useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const inputUserName = event => {
        setUserName(event.target.value)
    }
    const inputEmail = event => {
        setEmail(event.target.value)
    }

const inputPassword= event => {
    setPassword(event.target.value)
}

const signUpButton = () => {
    dispatch(signUp(username,email,password))
    setUserName('')
    setEmail('')
    setPassword('')
}

return(
    <div>
        <MainImage/>
        <div className="main2">
            <div className="signin">
                <img src={img_close_icon} alt=""  className="close" onClick={closeButton}/>
                <img src={img_logo_icon} alt=""  className="logo"/>
                <p className="head"> Sign up</p>
                <p>Username</p>
                <input type="text" onChange={inputUserName} placeholder="Enter your username"/>
                <p>Email</p>
                <input type="email" onChange={inputEmail} placeholder="Enter your email"/>
                <p>Password</p>
                <input type="password" onChange={inputPassword} placeholder="Enter your password" />
                <button onClick={signUpButton} className="signup-button">
                    <a href="/">Sign up</a>
                </button>
                <div className="foot"></div>
                <button className="text" onClick={dispatch(useNavigate('/signin'))}>Already a customer? sign in</button>


            </div>
        </div>

    </div>
)
}
export default SignUp;