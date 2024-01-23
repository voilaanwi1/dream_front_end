import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { fetchTags } from '../../redux/tags/operations'
import { getTags } from '../../redux/tags/selectors'
import { signOut } from '../../redux/users/operations'
import user_icon from '../../assets/img/icon-user.svg'

export const Option = ({setShowOption}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[checkUser,setCheckUser] = useState(false)
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY')
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'))
    const selector = useSelector(state => state)
    const tags = getTags(selector)


     const signOutButton = ()=>{
        dispatch(signOut)
        setCheckUser(false)
    }

    useEffect(() => {
        if (key !=null){
            setCheckUser(null)
        }
    },[key])


useEffect(()=>{
    dispatch(fetchTags())
}, []);

return(
    <>
    
        <div className='main2' onClick={()=>setShowOption(false)}>
            <div className='options'>
                <ul>
                    <li className='first'>
                        <img src={user_icon} alt="" />
                        {checkUser && <p>{user.user_name}</p>}

                    </li>
                    <li onClick={()=>navigate('/saved')} className='first'>Favorites</li>
                    {tags && tags.length
                    ? tags.map(t=>{
                        if(t.type === 'sell'){
                            return <li onClick={()=> navigate('/sale')}>Sell a house</li>
                        } else {
                            return(
                                <li
                                onClick={()=> navigate(`Search?tag_id=${t.id}&tag_type=${t.type}`)} >
                                    {t.type} a house
                                </li>
                            )
                        }
                    })

                    : ''}
                    <li onClick={signOutButton}>
                        {' '}
                    
                    <a href="/">Logout</a>              
       </li></ul>
          
            </div>

        </div>
    
    
    </>
)

}

