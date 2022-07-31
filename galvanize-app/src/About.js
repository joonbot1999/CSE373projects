import React from 'react';
import './css/App.css';
import {Link} from 'react-router-dom';
import image from './image_folder/volunteer2.jpg'
import megha from './image_folder/megha.jpg'
import joon from './image_folder/joon.jpg'
import niya from './image_folder/niya.jpg'
import alex from './image_folder/alex.jpg'
import sam from './image_folder/sam.jpg'

export function About() {
    return (
        <div className="container">
            <header className="mt-md text-center">
                <h1 className="font-weight-bo">
                    About Us
                </h1>
                <img className="img" src={image} alt="connection"/>
                <h2 className="mt-5">Who We Are</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="http://linkedin.com/in/niyapark" target="_blank" rel="noopener noreferrer"><img className="img-prof" src={niya} alt="Niya Park Picture"/></a>
                            <h5 className="mt-3">
                                Niya Park; Project Manager
                            </h5>
                            <p>
                                Senior BS in Health and Biomedical Informatics and BA Psychology
                            </p>
                        </div>
                        <div className="col">
                            <a href="https://www.linkedin.com/in/yoo-joon-chang-70115115b/" target="_blank" rel="noopener noreferrer"><img className="img-prof" src={joon} alt="Joon Chang Picture"/></a>
                            <h5 className="mt-3">
                                Yoo Joon Chang; Developer
                            </h5>
                            <p>
                                Senior studying BS Informatics
                            </p>
                        </div>
                        <div className="col">
                            <a href="https://www.linkedin.com/in/alex-ramos-394998225/" target="_blank" rel="noopener noreferrer"><img className="img-prof" src={alex} alt="Alex Ramos Picture"/></a>
                            <h5 className="mt-3">
                                Alex Ramos; Developer
                            </h5>
                            <p>
                                Senior BS in Informatics
                            </p>
                        </div>
                        <div className="col">
                            <a href="https://www.linkedin.com/in/meghajain-2/" target="_blank" rel="noopener noreferrer"><img className="img-prof" src={megha} alt="Megha Jain Picture"/></a>
                            <h5 className="mt-3">
                                Megha Jain; Developer
                            </h5>
                            <p>
                                Junior studying BS in Informatics and BA in Economics
                            </p>
                        </div>
                        <div className="col">
                            <a href="https://www.linkedin.com/in/sam-quiambao/" target="_blank" rel="noopener noreferrer"><img className="img-prof" src={sam} alt=""/></a>
                            <h5 className="mt-3">
                                Sam Jemuelle Quiambao; Product Designer
                            </h5>
                            <p>
                                Senior BS in Informatics
                            </p>
                        </div>
                    </div>

                </div>
                <h2 className="mt-2">Our Mission</h2>
                <p>
                    Connecting the community through volunteer service
                </p>
            </header>

            <h2 className="text-center mt-5">
                Our Purpose
            </h2>
            <p>
            People are always seeking ways to help and get involved in order to improve the community. With so many resources and nonprofits that support different causes, it is quite difficult to find ones that volunteers are interested in and can help make the most impact with. We envision that Galvanize will help break barriers between nonprofit organizations and people seeking volunteer opportunities, promoting more service and community connection.
            </p>

            <h2 className="text-center mt-5">
                Problem Statement
            </h2>
            <p>
            According to nonprofithub.org, there is a huge lack of information. Regarding using such technology, there is a lot of misinformation and not really a centralized place where people can go to learn more about getting involved.
            </p>

            <p>As discussed in the UN Sustainable Development Goal number 17, about ​​strengthening the means of implementation of these goals, because of the pandemic, organizations are having to recruit new volunteers and find more aid in terms of finances as well as hands-on.
            </p>
            <p>
            As a result, hiring and training are increasing in demand—getting this information across various websites, which is the method currently being used, is becoming a burden and inefficient (Successful Strategies for Recruiting, Training, and Utilizing Volunteers, SAMHSA).
            </p>
            <p>
            There are current solutions for this, however, as seen through wiredimact.com, some are very specific for a certain type of volunteer or SDG organization, and others are used for a wide range of hiring. Because of this, smaller nonprofits aren’t able to get their word across and get volunteers.
            </p>

            <div className="d-flex justify-content-center">
                <Link to="/organizations" className="button">Browse Organizations</Link>
            </div>


            <h2 className="text-center mt-5">
                Contact Us
            </h2>
            <p>
            For any questions, please email: <a href = "mailto: samq2@uw.edu">samq2@uw.edu</a>
            </p>

        </div>
    )
}
