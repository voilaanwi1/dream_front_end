import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { signIn } from "../redux/users/operations";
import img_logo from '../assets/img/icon-logo.svg'
import img_close_icon from '../assets/img/icon-close.svg'
import { MainImage } from "../components/common/MainImage";
import { getUser } from "../redux/users/selectors";
import { useNavigate } from "react-router";


const SignIn = ()=> {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const selector= useSelector(state => state)
    const errors = getUser(selector).errors
    const initialValues = {
        email:'',
        password:''

    }

    const [values,setValues] = useState(initialValues)
    const [isLoading,setIsLoading]= useState(false)
    const handleInputChange= e=> {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const signInButton = async()=>{
        setIsLoading(true)
        await dispatch(signIn(values,()=> navigate('/')))
        setIsLoading(false)
    }
    const CloseButton = () => {
        navigate('/')

    }
    return(
        <div>
            <MainImage/>
            <div className="main2">
                <div className="signin">
                    <img src={img_close_icon} alt=""  onClick={CloseButton} className="close"/>
                    <img src={img_logo} alt=""  className="logo"/>
                    <p className="head">Sign in</p>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Type your email" value={values.email}
                    onChange={handleInputChange}/>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter your password"
                    value={values.password} onChange={handleInputChange}/>
                    <button type="button" onClick={signInButton}>{`${isLoading?'loggin':'login'}`}</button>
                    <a href="/signup" className="joinus">JOIN US</a>
                    


                </div>

            </div>
        </div>
    )
    
}
    export default SignIn;
