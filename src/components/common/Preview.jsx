import React, { useState, useEffect } from 'react';
import API from '../../API';
import ImgIconBack from '../../assets/img/icon-back.svg';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {useNavigate} from "react-router"

const api = new API();

function Preview() {
    const { id } = useParams();
    const [home, setHome] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        api.getHome(id)
            .then((homeData) => {
                setHome(homeData);
            })
            .catch((error) => {
                alert('Failed to connect API: /house/:id/');
            });
    }, [id]);

    const clickback = () => {
        navigate('/');
    };

    return (
        <div className='prev'>
            <section className="preview">
                <div className="title" onClick={clickback}>
                    <img className="back" src={ImgIconBack} alt="" />
                    <button>Go back</button>
                </div>
                <div>
                    {home && home.main_image && (
                        <img
                            className="main_image"
                            src={`https://res.cloudinary.com/dwzjr9dg5/${home.main_image}`}
                            alt=""
                        />
                    )}
                    {home && home.sub_image1 && (
                        <div className="multi-images">
                            {home.sub_image1 && (
                                <img
                                    className="sub_image"
                                    src={`https://res.cloudinary.com/dwzjr9dg5/${home.sub_image1}`}
                                    alt=""
                                />
                            )}
                            {home.sub_image2 && (
                                <img
                                    className="sub_image"
                                    src={`https://res.cloudinary.com/dwzjr9dg5/${home.sub_image2}`}
                                    alt=""
                                />
                            )}
                            {home.sub_image3 && (
                                <img
                                    className="sub_image"
                                    src={`https://res.cloudinary.com/dwzjr9dg5/${home.sub_image3}`}
                                    alt=""
                                />
                            )}
                            {home.sub_image4 && (
                                <img
                                    className="sub_image"
                                    src={`https://res.cloudinary.com/dwzjr9dg5/${home.sub_image4}`}
                                    alt=""
                                />
                            )}
                        </div>
                    )}
                </div>
                {home && (
                    <table>
                        <tbody>
                            <tr className="table-head">
                                <th>{home.address}</th>
                                <td>${home.price}</td>
                            </tr>
                            <tr>
                                <th>{home.state}</th>
                                <td>
                                    Est. mortgage {home.rent_price ? `$${home.rent_price}/mo*` : ''}
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <button className="gc">
                                        {' '}
                                        <a href="/">Get Contact</a>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}

export default Preview;
