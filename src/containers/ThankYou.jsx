import React from 'react';
import { useDispatch } from 'react-redux';
import SaleImage from '../components/Common/SaleImage';
import { useNavigate } from 'react-router';

function ThankYou() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <>
            <section class="sell">
                <SaleImage />
                <article class="thankyou">
                    <h1>Thank you for the Details</h1>
                    <h4><br />
                        We have received your request. <br />
                        Our staff will contact you once we have processed your request.
                    </h4>
                        <button className="thankyou-button" onClick={() => navigate('/')}>Back to Home</button>
                </article>
            </section>
        </>
    );
}

export default ThankYou;
