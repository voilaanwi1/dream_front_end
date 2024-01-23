import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Push } from "connected-react-router";
import mainImg from '../../assets/img/background-main.png'
import ImgFavIcon from '../../assets/img/icon-fav.svg'
import {addFavorites, fetchFavorites} from '../../redux/favorites/operations'

import {getFavorites} from '../../redux/favorites/selectors'
import { useNavigate } from "react-router";


function HomesCard({ home, favorite}){
    const dispatch = useDispatch();
    const selector = useSelector(state=>state);
    const clickSaved = home =>{
        dispatch(addFavorites({ home: home.id}));
        dispatch(fetchFavorites());

    };
    const ClickHome = homeId =>{
        dispatch(useNavigate('/preview/' + homeId + '/'))
    };
    console.log('Home', home);
    console.log('Favorite', favorite);

    return(
        <div>
            <li key={home.id} className="box">
                {home &&
                favorite &&
                Object.values(favorite).filter(favoriteHome=>{
                    console.log('home', favoriteHome);
                    return home.id === favoriteHome.home.id
                }).length===0 &&(
                    <img  className="fav" onClick={()=>{
                        clickSaved(home)
                    }} src={ImgFavIcon} alt="" />
                )}
                <img  onClick={()=>ClickHome(home.id)} src={mainImg} alt="" />
                <h3>{home.price}</h3>
                <p>{home.layout} 1,800 sqft<br />
                <br />
                {home.state}, {home.address}
                </p>

            </li>
        </div>
    )
}

export default HomesCard;