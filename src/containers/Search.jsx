import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import {fetchHomes, clearHomes} from '../redux/homes/operations';
import {gethomes} from '../redux/homes/selectors';
import HomesCard from "../components/common/HomesCard";
import { fetchFavorites } from "../redux/favorites/operations";
import { getFavorites } from "../redux/favorites/selectors";


const Search = () => {
    const parsed = queryString.parse(window.location.search)
    const [search, setSearch] = useState(null)
    const[tagId, setTagId] = useState(null)
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const homes = gethomes(selector)
    const favorite = getFavorites(selector)

    useEffect(()=>{
        if(parsed.search !== undefined){
            setSearch(parsed.search)
        }

        if(parsed.tagId !== undefined) {
            setTagId(parsed.tagId)

        }
    }, [])

    useEffect(()=>{
        if(search !== null || tagId !==null){
            dispatch(clearHomes())
            dispatch(fetchHomes(search,tagId))
            dispatch(fetchFavorites())
        }
    }, [search,tagId])
    return(
        <>
        <section className="buy">
            <div className="head">
                {<h4>House for {parsed.tag_type? parsed.tag_type : ''}Near me</h4>}
                <ul className="images">
                    {homes.map(home=>(
                        <HomesCard home = {home} favorite={favorite}/>

                    ))}

                </ul>

            </div>


        </section>



        </>
    )
}
export default Search;