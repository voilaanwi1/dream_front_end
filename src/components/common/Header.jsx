import logo from '../../assets/img/icon-logo.svg' 
import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUser } from "../../redux/users/selectors";
import imageUseIcon from '../../assets/img/icon-user.svg'
import { push } from 'connected-react-router';
import {Option} from './Option'

const key = localStorage.getItem('HOME_LOGIN_USER_KEY')


 export const Header = () => {
    const [pathname,setPathname] = useState(null) // destructuring 
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const [showOption,setShowOption]=useState(false)
    const user = getUser(selector)
    const token = user ? user.token : null  // ternary operator, alternate of if-else  
    const [checkUser, setCheckUser] = useState(false)

    useEffect(()=>{
      setPathname(window.location.pathname)
      if (token){
         setCheckUser(true)
      }
    }, [user] )

return(
   <>
   <nav className='header2'>
      <img className='logo' src={logo} onClick={() => dispatch(push('/')) }/>
      {checkUser && checkUser===true ?(
         <div className='drop-down' onClick={()=> setShowOption(true)}>
            <img src={imageUseIcon}/>
            <button>{user.user_name}</button>
         </div>
      ):(
         <p>
            <a href='/signin'>SignIn</a>/<a href='/signup'>SignUp</a>
         </p>
      )}

   </nav>
   {showOption && <Option setShowOption={setShowOption}/>}
   </>
)
 }
