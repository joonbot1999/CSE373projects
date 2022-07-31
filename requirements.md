# Requirements 

VO = Volunteer Opportunities
WIP = Work in Progress
TBD = to be determined

For reference about our specifications, [please go to this link.](https://github.com/info442-aut21/g-team/blob/master/specification.md)

## Homepage
Homepage ID: v1.0<br>
Status: Complete<br>
Title: Main home screen<br>
Description: Homepage has 3 different aspects: nav bar, title screen, and user guide

Homepage ID: v1.1<br>
Status: Complete<br>
Title: Nav bar<br>
Description: Navbar appears on all pages. It includes links to main, about us, and VO pages

Homepage ID: v1.2<br>
Status: Complete<br>
Title: title screen<br>
Description: The title screen displays the title of our website in big font and TBD color

Homepage ID: v1.3<br>
Status: Complete<br>
Title: user guide<br>
Description: A user guide provides step by step instructions on how to use the website as they scroll through the page

Homepage ID: v1.4<br>
Status: Complete<br>
Title: images<br>
Description: Adds images for users to follow through for guide and the main page

Homepage ID: v1.5<br>
Status: Complete<br>
Title: CTA button<br>
Description: A call to action button is added to the title screen which leads directly to the volunteer opportunities page. 

## About Us
About Us ID: v2.0<br>
Status: Complete<br>
Title: Galvanize Purpose<br>
Description: This page shall list the core values of Galvanize’s purpose for connecting volunteers with nonprofits

About Us ID: v2.1<br>
Status: Revised/Complete - Information already givem in homescreen (1.3 user guide)<br>
Title: Galvanize Services<br>
Description: This page introduces the user to what is achievable through using our web app

About Us ID: v2.2<br>
Status: Complete<br>
Title: Find Opportunities<br>
Description: This page will have a call to action button so the user is able to navigate back and forth to find opportunities

About Us ID: v2.3<br>
Status: Complete<br>
Title: Image<br>
Description: The About Us page requires an image(s) that visualizes volunteers in action

About Us ID: v2.4<br>
Status: Complete<br>
Title: contact<br>
Description: contact information for Galvanize will be present and available for use to users

About Us ID: v2.5<br>
Status: Complete<br>
Title: Mission<br>
Description: This page will also include our mission statement and goals that we want to reach through this web-app

## Volunteer Opportunties
Opportunities ID: v3.0<br>
Status: Complete<br>
Title: Search<br>
Description: The opportunities page contains an empty list and a search bar on initial page load

Opportunities ID: v3.1<br>
Status: Revised/Complete - When displaying popup information about a VO, the map has a marker of the address; we decided<br>
to not create this filter and to instead create a map for each VO. 
Title: Location<br>
Description: When a user clicks the location feature, they can input their state, city, and/or zip code into text fields to output relevant cards of VOs within 10, 25, 50, or 100 miles of their location

Opportunities ID: v3.2<br>
Status: Complete<br>
Title: Category<br>
Description: When a user clicks a category in the filter box, the list of cards changes to only display opportunities for that category

Opportunities ID: v3.3<br>
Status: Impossible - We do not have this information from VOs<br>
Title: Time Commitment<br>
Description: A user can select the maximum number of hours they are looking to volunteer per week; the list of cards changes to only display VOs for those times

Opportunities ID: v3.4<br>
Status: Complete <br>
Title: Changed Filters<br>
Description: When a user clicks and changes location, category, and/or time commitment, the respective button will change to a darker shade to indicate to the user that changes have been made to the default setting 

Opportunities ID: v3.5<br>
Status: Revised/Complete - no images from VOs to display<br>
Title: Card<br>
Description: The card includes information about the VO and the organization, including an image and description. 

Opportunities ID: v3.6<br>
Status: Revised/Complete - No links to the contact form, instead it is already embedded. <br>
Title: Populated card view<br>
Description: Once the smaller card is clicked, a model of a larger card will pop up with more information about the VO, including a title, description, image, and links to the form to contact them

Opportunities ID: v3.7<br>
Status: Revised/Complete - All information is on the model/card. <br>
Title: Populated Card View - More Info Button<br>
Description: When the user clicks the ‘More Info’ button, the software will direct the user to a ‘More Info’ screen about the VO

Opportunities ID: v3.8<br>
Status: Revised/Complete - Contact form is embedded on the model card. <br>
Title: Populated Card View - Form button<br>
Description: When the user clicks the ‘Form’ button, the software will output a Form popup that will allow users to send a message to VOs    

## Form
Form ID: v4.0<br>
Status: Complete<br>
Title: Text Fields<br>
Description: The form shall accept user input using text fields—for names, emails, and messages—where they can submit ASCII characters

Form ID: v4.1<br>
Status: Incomplete<br>
Title: Character Limit - Name<br>
Description: The text field for name shall accept a maximum of 50 characters

Form ID: v4.2<br>
Status: Incomplete<br>
Title: Character Limit - Email<br>
Description: The text field for email shall accept a maximum of 50 characters

Form ID: v4.3<br>
Status: Incomplete<br>
Title: Character Limit - Message<br>
Description: The text field for message shall accept a maximum of 1000 characters

Form ID: v4.4<br>
Status: Incomplete<br>
Title: Spam Prevention<br>
Description: The form shall include a spam prevention feature using reCAPTCHA v2 or v3

Form ID: v4.5<br>
Status: Revised/Complete - Does not submit, prompt the user to fill out the field before submitting<br>
Title: Required Fields<br>
Description: The form shall have the fields of name, email, and message as required; if one or more is left blank, the submit button will be grayed out and disabled until all three are filled out 

Form ID: v4.6<br>
Status: Complete<br>
Title: On Submit - Success Message<br>
Description: The form shall display a success message when the form validates and submits the message to the organization

Form ID: v4.7<br>
Status: Complete<br>
Title: On Submit - Error Message<br>
Description: The form shall display a “try again” message when the form is unsuccessful in submitting the message to the organization

Form ID: v4.8<br>
Status: Complete<br>
Title: Close / “X” Button<br>
Description: The form shall include a close button at the top right of the form. This button will close out the form and “return” the users to the volunteer opportunity - more information page they were on

Form ID: v4.9<br>
Status: Complete<br>
Title: Clicking Outside Form Modal<br>
Description: The form shall not close out when the user clicks or taps outside the form

## More Information - Volunteer Opportunities
More Info ID: v5.0<br>
Status: WIP<br>
Title: Web Link<br>
Description: When the user clicks the web link, the page will redirect to the VO’s official webpage

More Info ID: v5.1<br>
Status: Impossible - No 'more info' page due to revision <br>
Title: Contact Organization<br>
Description: When the user clicks the ‘Contact Organizations’ button, the software will output a Form popup that contains an empty text field for users to send a message to VOs 

## Map
Map ID: v6.0<br>
Status: Revised/Complete - this feature was not included due to the complexity of building the maps.<br>
Title: Location<br>
Description: Map will be a separate page on the nav bar and will allow users to find an organization to get involved with based on the location

Map ID: v6.1<br>
Status: Revised/Complete - Information already displayed on card<br>
Title: Organization Information - custom label<br>
Description: Upon clicking on a pin on the map, a custom label will appear detailing more information about the organization. Address, category, and a link to their website will be shown in the custom label

Map ID: v6.2<br>
Status: Complete<br>
Title: Custom Label - Website Information<br>
Description: Upon clicking on the organization’s website link, the user will be redirected to the organization’s website in a new window

Map ID: v6.3<br>
Status: Impossible - not using google API<br>
Title: Custom Label - Address<br>
Description: Upon clicking on the address, the user will be redirected to the default maps application with the organization’s address filled out in the “destination” field for directions
