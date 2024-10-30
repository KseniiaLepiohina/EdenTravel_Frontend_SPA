import React from "react";
import calendar from '../assets/calendar.svg'

export default function Booking () {
    return(
           <section className="booking_title">
                <h2> Plan your travel now</h2>
        <section className='booking-container'>
                <section className="booking_part" >
                    <label>Search Destination*</label>
                    <input placeholder='Enter Destination*'/>
                </section>
                <section className="booking_part">
                    <label>Pax Number*</label>
                    <input placeholder='No.of People'/>
                </section>

                <section className="booking_part">
                    <label>Checkin Date*</label>
                    <section className="checkdate">
                    <input placeholder='MM / DD / YYYY'/>
                        <span>
                        <img src={calendar} alt="checkout date"/>     
                        </span>
                    </section>
                </section>
                <section className="booking_part">
                    <label>Checkout Date*</label>
                    <section className="checkdate">
                        <input placeholder='MM / DD / YYYY'/>
                        <span>
                        <img src={calendar} alt="checkout date"/>     
                        </span>
                    </section>
                    
                </section>
                <button className="search_btn"> <h3> SEARCH</h3></button>
        </section>
        </section>
        
    )
}