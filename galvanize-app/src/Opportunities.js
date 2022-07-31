import React, {useEffect, useState} from 'react';
import './css/App.css';
import './css/App-Responsive.css'
import volunteerOrgs from './volunteer.json'
import { Popup } from './Popup.js'

export function Opportunities() {
  // creation of state variables
  const [organizations, setOrganizationsValue] = useState(volunteerOrgs);
  const [orgValue, setOrgValue] = useState('');
  const [catValue, setCatValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [idValue, setIdValue] = useState(0);
  const [cityValue, setCityValue] = useState('');


  /* EVENT HANDLERS SECTION */

  // search organization form event handler, listens for using input (typed in org name)
  const handleOrgChange = (event) => {
    let newValue = event.target.value;

    setOrgValue(newValue);
    parseVolunteerOrgs(event.target.value, catValue, cityValue)
  }

  // filter by category event handler, listens for user change on the drop down list menu
  const handleCatChange = (event) => {
    let newValue = event.target.value;

    setCatValue(newValue);
    parseVolunteerOrgs(orgValue, event.target.value, cityValue)
  }

  const handleCityChange = (event) => {
    let newValue = event.target.value;

    setCityValue(newValue);
    parseVolunteerOrgs(orgValue, catValue, event.target.value)
  }

  const handleClear = (event) => {
    event.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );

    setCatValue('');
    setOrgValue('');
    setCityValue('');
    parseVolunteerOrgs('', '', '');
  }

  // toggles "show" of the card popup
  const togglePopup = (event) => {
    setIdValue(event.target.id)
    setIsOpen(!isOpen);
  }

  // function that sets state variable values. Runs on submission of form element to
  // update our data to match that of which the user is looking for.
  const parseVolunteerOrgs = (orgValue, catValue, cityValue) => {
    let returnedOrgs = volunteerOrgs;
    console.log(orgValue)
    if (orgValue != '') {
      returnedOrgs = volunteerOrgs.filter((org) => {
        return org.organizationName.toLowerCase().includes(orgValue.toLowerCase());
      })
      //console.log(returnedOrgs)
    }

    let temp = returnedOrgs
    if (cityValue != '') {
      temp = returnedOrgs.filter((org) => {
        return org.city.toLowerCase().includes(cityValue.toLowerCase());
      })
    }

    let finalOrgs = temp;
    if (catValue != '') {
      finalOrgs = returnedOrgs.filter((org) => {
        return org.category.toLowerCase() === catValue.toLowerCase();
      })
      console.log("final orgs: " + finalOrgs)
    }

    setOrganizationsValue(finalOrgs);
  }



  /* CARD MAKING FUNCTIONS */

  // returns an entire page containing a list of volunteer organization cards
  function ResultsPage(props) {
    if (props.orgs.length == 0) {
      return (
        <div className = "flex-container">
          <p className="alert">No results found</p>
        </div>
      )
    }
    return (
      <ResultList orgs={props.orgs} />
    )
  }

  // Creates an array of cards and puts them into a div with class card row
  function ResultList(props) {
    let itr = -1;
    let resultCardArray = props.orgs.map((currentOrg) => {
      itr++;
      return (
        <ResultCard org={ currentOrg } id={ itr } />
      )
    })

    return (
      <div className="flex-container">
        { resultCardArray }
      </div>
    )
  }

  // Create each individual card using org specific information
  function ResultCard(props) {
    let orgName = props.org.organizationName
    let category = props.org.category
    let imgDir =  props.org.imgdir
    let categoryWords = category.split(' ');
    for (let i = 0; i < categoryWords.length; i++) {
      categoryWords[i] = categoryWords[i][0].toUpperCase() + categoryWords[i].substr(1);
    }
    category = categoryWords.join(" ");
    let description = props.org.description
    let id = props.id;
    return (
        <div className="card" id={ id }>
          <h2  id={ id }>{ orgName }</h2>
          <div className="cat-handle">
            <p id={ id }>{ category }</p>
            <img id={ id } src={require("" + imgDir).default} className="icon-style"></img>
          </div>
          <p id={ id }>{ description }</p>
          <p id={ id } onClick={togglePopup} className="learn-more">Learn more</p>
          {isOpen && <Popup address={organizations[idValue]['address']}
          description={organizations[idValue]['description']}
          url={organizations[idValue]['website']}
          long={organizations[idValue]['long']}
          lat={organizations[idValue]['lat']}
          handleClose={togglePopup}
        />}
      </div>
    )
  }

  // HTML to be returned and rendered in our App.js component
  return (
    <div>
      <section className="filter-elements">
        <form onSubmit={ handleClear }>
          <input
            id="organization-bar"
            type="text"
            placeholder="Search Organization"
            value = { orgValue }
            onChange={ handleOrgChange }
            className="mx-2"
            maxlength="30"/>

          <input
            id="location-bar"
            type="text"
            placeholder="City"
            value={ cityValue }
            onChange={ handleCityChange }
            className="mx-2"
            maxlength="30"/>

          <select id="categoriesList" className="mx-2" value={ catValue } onChange={ handleCatChange }>
            <option value="">Choose Category</option>
            <option>Accounting</option>
            <option>Advocacy</option>
            <option>Admin</option>
            <option>Aging/Disabilities</option>
            <option>Basic Needs</option>
            <option>Care Giver</option>
            <option>Clerical</option>
            <option>Disaster</option>
            <option>Education</option>
            <option>Environment</option>
            <option>Health</option>
            <option>Meal Service</option>
            <option>Mentor</option>
            <option>Repair</option>
            <option>Teach</option>
            <option>Technology</option>
          </select>
          <button className="submit mx-2 button" id="submit" aria-label="button">Clear</button>
        </form>
      </section>
      <div>
        <ResultsPage orgs={organizations} />
      </div>
    </div>

  )
}
