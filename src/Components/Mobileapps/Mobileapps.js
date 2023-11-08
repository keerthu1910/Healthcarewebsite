import React from 'react';
import './style.scss';
import mobileappselement from '../../assets/mobileappselement.png';
import mobileapps from '../../assets/mobileapps.png';
export const Mobileapps = () => {
    return(
        <div className='mobileapps-container'>
            <div className='mobileapps-content'>
                <p className='title'>Download our<br></br> mobile apps</p>
                <div className='rectangle'></div>
                <p className='content'>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                <button>Download  {'\u2193'}</button>
            </div>
            <div className='img-container'>
                <img src={mobileapps}/>
            </div>
            <div className='bg-element'><img src={mobileappselement} /></div>
        </div>
    )
}