import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getFavorites } from "../redux/favorites/selectors";
import { gethomes } from "../redux/homes/selectors";
import { deleteOperationFavorites } from "../redux/favorites/operations";
import { fetchFavorites } from "../redux/favorites/operations";
import img_fav_icon from '../assets/img/icon-fav.svg'

import mainImage from '../assets/img/background-main.png'

const Saved = ()=>{
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const favorites=getFavorites(selector)
    useEffect(()=>{
        dispatch(fetchFavorites())

    }, [])

    return(
        <div>
            <section className="buy">
                <div className="head">
                    <h4>Saved houses</h4>
                    <ul className="images">
                        {favorites && favorites.map(favorite=>(
                            <li className="box">
                                <img src={img_fav_icon} alt=""  className="fav" onClick={()=>{
                                    dispatch(deleteOperationFavorites(favorite.id))
                                }}/>
                                <img src={mainImage} alt="" />
                                    <h3>{favorite.price}</h3>
                                    <p>{favorite.home.layout} 1800 sqft
                                    <br />
                                    {favorite.home.state},{favorite.home.address}
                                    </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </div>
    )
}
export default Saved;