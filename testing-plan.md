 
# Manual Acceptance Testing
We will be manually testing our features through acceptance testing. For each new pull request, the product developer will test the web app to see if the code pushed works as intended. If a failure or unexpected outcomes are found, a new Github issue will be made detailing the failure and the steps to recreate the failure. The issue will be assigned to the developer previously working on that code. Everyone will be notified about the new issue so that all developers are aware in case it affects other’s code as well. 
 
On top of testing for each pull request, testing will be done after a milestone is finished. A milestone may contain more than one feature, therefore, the script will be based on the requirements.
 
A starter data will be provided containing 15 organizations in sample_data.json 
 
Tests will be run in the following contexts:
- iOS 15.1 - Safari browser/Chrome 
- Windows 10 - 22” screen - Firefox 93.0
- Windows 10 - 13” screen - Chrome 95.0.4638.54
 
## Layout and Design - Homepage
*This covers our requirements for Homepage 1.0 - 1.4*

1. The user accesses our web app and lands on the home page
2. The page should display four items in the navbar on the top of the screen: Home, Volunteer Opportunities, About Us, Maps, and a logo.
3. The page display the web app’s name and a call to action button in the middle
4. The user scrolls down and sees instructions on how to use the site. This should include images and texts

## Layout and Design - About Us
*This covers our requirements for About Us 2.0 - 2.5*

1. The user accesses our web app and lands on the home page
2. The user clicks on the “About Us” button on the navbar and lands on our About Us page and sees the mission and values of Galvanize 
3. The user scrolls down and sees information about our services and a call to action button that leads to the “Volunteer Opportunities” page
4. The user keeps scrolling and sees information about how to contact us. 

## Layout and Design - Volunteer Opportunities
*This covers our requirements for Volunteer Opportunities*
 
1. The user accesses our web app and lands on the home page
2. The user clicks on the “Volunteer Opportunities” button on the navbar and lands on our Volunteer Opportunities page and sees 10 cards in alphabetical order. A search bar and filter buttons showing location and category can also be seen just before the list of cards. 
3. The user clicks on the location filter and inputs “98105” and the list will show 10 cards located near the zip code
4. The user clicks on the location filter and selects “health” and the list will show 3 cards relating to “health” near the 98105 zip code
5. The filter buttons are a darker shade after inputting the filters.
6. The user clicks on one of the cards and a modal pops up with more information about the volunteer opportunities including a title, description, image, and links to the form to contact them
7. The user clicks on the “form” button and the modal changes into a contact form 
8. The user clicks on the “more info” button and the page goes into the more info page of the card clicked on.

## Layout and Design - Form
*This covers our requirements for Form*
1. The user has clicked on the “Form” button on the pop up card modal and the modal changes to show the form containing the text fields and label including the name, email, message, reCaptcha, and a grayed out submit button.
2. The user inputs their name on the text fields under the “Name” label.
3. The user inputs their email on the text fields under the “Email” label.
4. The user inputs their message on the text fields under the “Message” label.
5. The user clicks on reCaptcha and follows all the prompts, once successful the submit button turns from disabled to enabled.
6. The user clicks on the submit button. The form successfully processes the information and a success message appears “Your message has been sent successfully.”

## Layout and Design - More Information: Volunteer Opportunities
*This covers our requirements for More Information: Volunteer Opportunities*
1. The user clicks on the “More Info” button on the pop up card modal and the user is sent into a different page about the card with the name, description, address, form button, and external website. 
 
## Layout and Design - Map
*This covers our requirements for Map*
1. The user accesses our web app and lands on the home page
2. The user clicks on the “Map” button on the navbar and lands on our Map page with a map on the screen. 
3. The user inputs their zip code and the map zooms in to the zip code location with pins.
4. The user clicks on one of the pins and a custom label will appear detailing more information about the organization such as the address, category, and a link to the organization’s website.
