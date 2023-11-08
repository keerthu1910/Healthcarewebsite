import React from 'react';
import './style.scss';
import bgimg from '../../assets/servicesbackground.png';
import bgelement from '../../assets/servicesbgelement.png';
import consultation from '../../assets/consultation.png';
import details from '../../assets/details.png';
import pharmacy from '../../assets/pharmacy.png';
import search from '../../assets/search.png';
import tracking from '../../assets/tracking.png';
import frame from '../../assets/Frame.png';
export const Services = () => {
    const servicecontent = [
        {'image':consultation,'title':'Consultation','content':'Free consultation with our trusted doctors and get the best recomendations'},
        {'image':details,'title':'Details info','content':'Free consultation with our trusted doctors and get the best recomendations'},
        {'image':pharmacy,'title':'Online Pharmacy','content':'Buy  your medicines with our mobile application with a simple delivery system'},
        {'image':search,'title':'Search Doctor','content':'Choose your doctor from thousands of specialist, general, and trusted hospitals'},
        {'image':tracking,'title':'Tracking','content':'Track and save your medical history and health data'},
        {'image':frame,'title':'Emergency Care','content':'You can get 24/7 urgent care for yourself or your children and your lovely family'}
    ];
    return(
        <div className='services-container'>
            <div className='background-container'>
                <img className='bgimg' src={bgimg}/>
                <img className='element' src={bgelement}/>
            </div>
            <div className='content-container'>
                <div className='heading'>
                    <p className='title'>Our Services</p>
                    <div className='rectangle'></div>
                    <p className='title-content'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment<br></br> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                </div>
            </div>
            <div className='card-container'>
                
                    {
                        servicecontent.map((item,index)=>(
                            <div className='card'>
                                <img key={index} src={item.image}/>
                                <p className='card-title'>{item.title}</p>
                                <p className='card-content'>{item.content}</p>
                            </div>
                        ))
                    }
                

            </div>
            <div className='btn-container'>
            <button>Learn more</button>
            </div>
        </div>
    )
}