import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import mainImage from '../../assets/img/background-main.png'


const Card = ({home})=> {
    const dispatch = useDispatch()
    const selector = useSelector(state=>state)

    return(
        <li key={home.id} className="box">
            <img src={mainImage}/>
            <h3>{home.price}</h3>
            <p>{home.layout}1800 sqft <br />
            {home.state}, {home.address} </p>


        </li>
    )
}

export default Card;