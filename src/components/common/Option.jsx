import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { fetchTags } from '../../redux/tags/operations'
import { getTags } from '../../redux/tags/selectors'
import { signOut } from '../../redux/users/operations'
import user_icon from '../../assets/img/icon-user.svg'

export const Option = () => {
    const dispatch = useDispatch()
    const[checkUser,setCheckUser] = useState(false)
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY')
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'))
    const selector = useSelector(state => state)
    const Tags = getTags(selector)


     const signOutButton = ()=>{
        dispatch(signOut)
        setCheckUser(false)
    }

    useEffect(() => {
        if (key !=null){
            setCheckUser(null)
        }
    })
}