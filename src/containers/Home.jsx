import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomes, clearHomes } from '../redux/homes/operations';
import { getTags } from '../redux/tags/selectors';
import { fetchTags } from '../redux/tags/operations';
import MainImg from '../assets/img/background-main.png'
import { gethomes } from '../redux/homes/selectors';
import { MainImage } from '../components/common/MainImage';
import { useNavigate } from 'react-router';

const Home = ()=>{
    const dispatch = useDispatch();
    const selector  = useSelector(state=>state);
    const homes = gethomes(selector);
    useEffect(() =>{
        dispatch(clearHomes());
        dispatch(fetchHomes())
    }, []);
    const tags = getTags(selector);
    const clickHome = homeId =>{
        dispatch(useNavigate(`/preview/${homeId}/`))
    };
    useEffect(()=>{
        dispatch(fetchTags());
    },[])


return(
    <>
    <MainImage />
    <section className='option'>
        <h4>
            Whether you are buying, selling or renting, <br />
            we can help you move forward.
        </h4>
        
    </section>
    <section className='explore'>
        <div>
            <h4>Explore homes on dream house</h4>
        </div>
        <div className='images'>
            <ul className='column'>
                <ul className='rows'>
                    { homes && homes.map(home=> (
                        <li className='single' key={home.id}>
                            <img src={MainImg} alt=''/>
                            <div className='box-main'>
                                <h1>{home.address}</h1>
                            </div>
                            <button id ='vh' onClick={()=> clickHome(home.id)}>
                                View more</button>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    </section>
    </>
);
}

export default Home;
        