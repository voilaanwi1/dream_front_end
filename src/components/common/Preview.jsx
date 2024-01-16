import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import API from '../../API'
import { useParams } from 'react-router'
import icon_back from '../../assets/img/icon-back.svg'
import { Link } from 'react-router-dom'

const api = new API ()
 export const Preview = () => {
    const {id} = useParams()
    const[home, setHome] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        api.getHome(id)
        .then(home =>{
            setHome(home)
        })
        .catch(error => {
            alert('failed to connect api:/house/:id/')

        })
    },[])

    const clickBack = ()=>{
        dispatch(useNavigate())

    }

    return(
        <>
        <section className='preview'>
            <div className='title' onClick={clickBack}>
                <img src={icon_back} alt=""  className='back'/>
                <button className='go_back' > Go back</button>
            </div>

            <div>
                {home && (
                    <img className='mainImage' src={home.main_image}/>
                )}
                {home && (
                    <div className='multi_images'>
                        <img src={home.sub_image1} alt=""  className='sub_image'/>
                        <img src={home.sub_image2} alt=""  className='sub_image'/>
                        <img src={home.sub_image3} alt=""  className='sub_image'/>
                        <img src={home.sub_image4} alt=""  className='sub_image'/>
                    </div>
                )}
            </div>
            {
                home && (
                    <table>
                        <tr className='table-head'>
                            <th>
                                {home.address}
                            </th>
                            <td>
                                ${home.price}
                            </td>
                        </tr>
                        <tr className=''>
                            <th>
                                {home.state}
                            </th>
                            <td>
                               Est mortgage ${home.rent_price}/mo*
                            </td>
                        </tr>
                        <tr>
                            <th>
                                {home.layout}
                            </th>
                            <td>
                                <button className='gc'>
                                    <Link to='/'>Get contact</Link>
                                </button>
                            </td>

                        </tr>
                    </table>
                )
            }
        </section>
        </>
    )
 }