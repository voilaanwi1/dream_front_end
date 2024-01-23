import { useNavigate } from "react-router";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import SaleImage from "../components/common/SaleImage";
import { sellRequest } from "../redux/request/operations";



function Sale(){
    const dispatch = useDispatch()
    const [address,setAddress]= useState(''),
    [sqft,setSqft]= useState(''),
    [age_building, setAge_building] = useState('')

    const inputAdress = e => {
        setAddress(e.target.value)
    }

    const inputSqft = e => {
        setSqft(e.target.value)
    }

    const inputAge_building = e => {
        setAge_building(e.target.value)
    }

    const SubmitButton = e => {
        let params = {
            address:address,
            sqft: sqft,
            age_building: age_building
        } 
        dispatch(sellRequest(params))
        e.preventDefault()
        dispatch(useNavigate('/ThankYou'))
    }

    return(
        <>
        <section className="sell">
            <SaleImage/>
            <article className="text">
                <h1>Sell your home directly with Dream House </h1>
                <p>
                    Getting a competitve cash offer from Dream House is an easy path to sell your home, with more control 
                    and less paperwork. You sell your home as it is and get paid with no surprises, while we take care of the rest.

                </p>
                <h3>Input your information to get counseling.</h3>

            </article>
            <div className="form">
                <h2>Property Address</h2>
                <input type="text"
                onChange={inputAdress}
                name="address" 
                placeholder="Enter your property address"/>
                <h2>Home size</h2>
                <input type="text" onChange={inputSqft}  name="sqft" placeholder="Enter your home size(sqft)"/>
                <h2>Year built</h2>
                <input type="number"  onChange={inputAge_building} name="age_building" placeholder="2008"/>
                <br />
                <input type="submit" onClick={SubmitButton}/>
            </div>
        </section>
        </>
    )
}
export default Sale;