import React from 'react';
import './style.scss';
import description from '../../assets/description.png';
export const Description = () => {
    return(
        <div className='description-container'>
            <div className='img-container'>
                <img src={description}/>
            </div>
            <div className='description-content'>
                <p className='heading'>Leading healthcare <br></br> providers</p>
                <div className='rectangle'></div>
                <p className='content'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}