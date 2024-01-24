import React from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router"

export default function CategoryCard({ tag }) {
    const navigate = useNavigate()
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const pushTotag = tagId => {
        if (key) {
            if (tag.type === 'Sell') {
                navigate('/sale');
            } else {
                navigate(`/search?tag_id=${tagId}&tag_type=${tag.type}`);
            }
        } else {
            navigate('/signup');
        }
    };

    return (
        <li class="home" key={tag.id}>
            <img src={tag.image} alt="" />
            <h1>{tag.name}</h1>
            <p>{tag.description}</p>
            <button onClick={() => pushTotag(tag.id)}>{tag.type} homes</button>
        </li>
    );
}
