# SalesLoft People API

This application was built for SalesLoft's Support Software Engineer Evaluation Assessment. Using SalesLoft's API, a list of People records is shown, displaying each person's name, job title, and email address.

Character counts are provided for each unique character in all email addresses combined, as well as by individual email addresses.

## Deployed Site

This application was deployed using Heroku, and is mobile responsive. [Visit the site here.](https://salesloftapi.herokuapp.com)

## Technologies Used
* React as Front-End Client
* React-Bootstrap for Styling 
* Node and Express for Back-End Server and Routing
* Axios for API call
* Postman used for API request testing

## Development
1. Tested SalesLoft API request using Postman and used provided API key as token for header.
2. Server set up using Node and Express. Specified environment variables and routing paths.
3. Created controller for API request. Used dotenv for secret API key, axios used for get request.
4. Set up express router to use controller when called from client.
5. Created React client with components, API utility, and main page.
6. Deployed to Heroku after setting up config for client/build in server, and saving secret API keys in app's Heroku settings.

#### Function Process/Flow
1. DataContainer component receives response data from API request.
2. Response data sent to  child component, PersonData.
3. Total character count calculated for all emails combined, saved in DataContainer component, and sent to parent component HomePage using method from props.
4. PersonData component takes response data, counts unique characters in each individual email address, and sends to child component, CharacterCount.
5. PersonData renders accordion-style cards for each Person record. Displays name, title, and email address.
6. On row click, accordion toggles and displays child component, CharacterCount, where data is sorted and displayed as table.
7. HomePage sends total character count data to child component, Header.
8. Total combined character count data is sent to Header's child component, CharCountModal, where data is sorted and displayed as table inside a modal.


#### Database Design Portion
![Image of Database Design](https://github.com/tpgaviria/saleslofteval/blob/master/SLDatabaseDesign.png)

#### SQL Hunt Portion
 sqlhunt.sql file can be run in PostgreSQL database to run queries. [SQL file here.](https://github.com/tpgaviria/saleslofteval/blob/master/sqlhunt.sql)
