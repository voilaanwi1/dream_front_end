import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import SaleImage from '../components/common/SaleImage'


function ThankYou(){
    const dispatch = useDispatch();
    return(
        <>
        <section className="sell">
            <SaleImage />
            <article className="thankyou">
                <h1>Than you for the Details</h1>
               <h4> <br />
                We have received your request. <br/>
                Our staff will contact you once we have processed your request.
                </h4>
                <button className="thankyou-button" onClick={()=>dispatch(push('/'))}>Back to Home</button>
            </article>
        </section>
        </>
    )
}

export default ThankYou