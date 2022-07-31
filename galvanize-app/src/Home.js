import React from 'react';
import image1 from './image_folder/volunteer.png'
import image2 from './image_folder/connection3.jpg'
import image3 from './image_folder/filter-and-search.jpg'
import image4 from './image_folder/card.png'
import image5 from './image_folder/contact.jpg'
import './css/App.css';
import './css/App-Responsive.css';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Opportunities } from './Opportunities.js';

export function Home() {
    return (
        <div className="App primary-background">
          <div className="container">
          <header className="App-header">
            <h1 className="font-header">
              Galvanize
            </h1>
            <p className="font-main-hook">
              Promoting Community Service by Connecting<br/>
              People to Opportunities
            </p>
            <Link to="/organizations" className="button">Browse Organizations</Link>
          </header>

          <main>
            
            <section className="mb-lg">
              <Row className="d-flex align-items-center">
                <Col>
                  <h2 className="text-center text-md-left">Why volunteer?</h2>
                  <p>
                    Volunteering offers vital help to people in need, worthwhile
                    causes, and the community, but the benefits can be even greater
                    for you, the volunteer. The right match can help you to friends
                    friends, connect with the community, learn new skills,
                    and even advance your career.
                  </p>
                  
                </Col>
                <Col className="d-flex justify-content-center">
                  <img className="image-style" src={image1} alt="volunteer"/>
                </Col>
              </Row>
           
            </section>

            <section className="mb-lg mt-lg">
              <Row className="d-flex flex-md-row-reverse align-items-center">
                <Col>
                <h2 className="text-center text-md-left">Why us?</h2>
                <p>
                  Our webapp allows you to search for organizations that fits your<br/>
                  interests, location, and time commitment preferences.<br/>
                  We offer tools for you to find virtual and in-person opportunities,<br/>
                  catered to your interests and your time. <br/>
                </p>
                </Col>
                <Col className="d-flex justify-content-center">
                  <img className="image-style" src={image2} alt="connection"/>
                </Col>
              </Row>
            </section>
            
            
            <section>
              <h2 className="text-center text-md-left">Using the site</h2>
                <Row> 
                  <Col> 
                    <div className="d-flex flex-column-reverse justify-content-center align-items-center mb-5">
                      <p className="mt-4">On our Organizations page, you can search and filter by category to find an organization that fits your interest. </p>
                      <img className="image-style image-style-square" src={image3} alt="connection"/>
                    </div> 
                  </Col>
                  <Col>
                    <div className="d-flex flex-column-reverse justify-content-center align-items-center mb-5">
                      <p className="mt-4">Click on a card to show more information about the organization. </p>
                      <img className="image-style image-style-square" src={image4} alt="connection"/>
                    </div> 
                  </Col>
                  <Col>
                    <div className="d-flex flex-column-reverse justify-content-center align-items-center">
                      <p className="mt-4">Message an organization by inputting your details through our form.</p>
                      <img className="image-style image-style-square" src={image5} alt="connection"/>
                    </div> 
                  </Col>
                </Row>
              
            </section>
          </main>
          </div>
         
        </div>
      );
}