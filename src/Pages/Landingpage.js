import React from 'react';
import { Mobileapps, Navbar, Testimonials } from '../Components';
import { About } from '../Components';
import { Services } from '../Components/Services';
import {Description} from '../Components/Description';
export const Landingpage = () => {
    return(
        <>
            <Navbar />
            <About />
            <Services />
            <Description />
            <Mobileapps />
            <Testimonials />
        </>
    )
}