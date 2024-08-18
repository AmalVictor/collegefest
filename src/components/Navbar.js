import React from 'react';
import Logo from '../images/logo1.png';


export default function Navbar(){
    return(
        <nav>
            <img src={Logo} alt='Logo'/>
            <h3>IGNITO</h3>
            <button class="home">Home</button>
            <button class="us">About Us</button>
            <div class="dropdown">
                <button class="dropbtn">Info</button>
                <div class="dropdown-content">
                        <a>Event</a>
                        <a>Location</a>
                        <a>Time</a>
                </div>
            </div>
            <button class="book">Book Tickets</button>
        </nav>
    )
}