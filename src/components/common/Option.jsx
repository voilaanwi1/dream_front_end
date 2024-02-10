import React, { useState, useEffect } from 'react';
import ImgUseIcon from '../../assets/img/icon-user.svg';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../reducks/users/operations';
import {useNavigate} from "react-router"
import { getTags } from '../../reducks/tags/selectors';
import { fetchTags } from '../../reducks/tags/operations';

function Option({ setShowOption }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'));
    const selector = useSelector(state => state);
    const tags = getTags(selector);

    console.log('Tags', tags);
    const signOutButton = () => {
        dispatch(signOut(navigate));
        setCheckUser(false);
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    useEffect(() => {
        dispatch(fetchTags());
    }, []);
    return (
        <>
            <div class="main2" onClick={() => setShowOption(false)}>
                <div class="options">
                    <ul>
                        <li class="first">
                            <img src={ImgUseIcon} alt="" />
                            {checkUser && <p>{user.user_name}</p>}
                        </li>
                        <li onClick={() => navigate('/saved')} class="first">
                            Favorites
                        </li>
                        {tags && tags.length
                            ? tags.map(t => {
                                  if (t.type === 'Sell') {
                                      return <li onClick={() => navigate('/sale')}>Sell a house </li>;
                                  } else {
                                      return (
                                          <li
                                              onClick={() => navigate(`Search?tag_id=${t.id}&tag_type=${t.type}`)}
                                          >
                                              {t.type} a house
                                          </li>
                                      );
                                  }
                              })
                            : ''}

                        <li onClick={signOutButton}>
                            {' '}
                            <a href="/">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Option;
