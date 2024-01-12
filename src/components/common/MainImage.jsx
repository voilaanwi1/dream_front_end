import React,{userState} from "react";
import { useDispatch } from "react-redux";
import mainBackGroundImage from '../../assets/img/background-main.png'
import { useNavigate } from "react-router";
import SearchIcon  from  '../../assets/img/icon-search.svg'

export const MainImage = () => {
    const dispatch = useDispatch()
    const [search,setSearch]=userState()

    const inputFind = (event) => {
        setSearch(event.target.value)
    }
    const submitAction = (search) => {
        dispatch(useNavigate('/search/?search='+ search))
    }
    return(
        <>
        <nav class="navbar">
        <img src="./img/Group 33.png" alt="logo" width="150px" />
        <a href="./sigin.html">Sign Up/ Sign In</a><br />
        <input type="text" placeholder="Search" onChange={()=>inputFind()}/>
        <img class="lens" src={SearchIcon} alt="" onClick={()=>submitAction(search)}/>
      </nav>
      <div class="home">
        <img src={mainBackGroundImage} alt="" class="homeimg" />
      </div>
      <div class="contentimg">
        <h1>Discover a place<br />you'll love to live</h1>
        <p>
          Check out the latest homes<br />
          based on your personal prefereces
        </p>
      </div>
        </>
    )
}