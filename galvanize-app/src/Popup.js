import React, { useRef, useEffect, useState } from 'react';
import volunteerOrgs from './volunteer.json'
import Map from './Map.js'
import { ContactForm } from './ContactForm';

export function Popup(props) {
  console.log(props.name);
  let long = props.long;
  let lat = props.lat;
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <p className="org-name">{props.name}</p>
        {props.description}
        <p>{props.address}</p>
        <p><a href={props.url}>Link to the site</a></p>
        <Map long={props.long} lat={props.lat}/>
        <ContactForm />
      </div>
    </div>
  );
};
