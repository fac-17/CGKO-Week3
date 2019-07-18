# [Crime checker](https://fac-17.github.io/CGKO-Week3/) :oncoming_police_car:

Team: 
[Gigi](github.com/gminova)
[Tony](github.com/tonylomax)
[Francesca](github.com/frannyfra)
[Christine](github.com/xIrusux)

## Aim 

Our aim was to build a simple web app (ideally just a single page). It must query at least two APIs and use the results to update the DOM.

## User Journey

Young family expecting a baby and they are looking for a place in a safe area. 

They have an idea about where they want to live but they would like to know local crime rates and house prices.

//

> After the issues with our first API choice we had to change the user story slightly:

Young family expecting a baby and they are looking for a place in a safe area, if there are crimes reported recently and of what category.

## "Code of conduct" - (How we agreed to work together in this team)

1. Use 20/20/20 - if a pair has not found an answer after 20 min we can open the problem up to the team and do a mob
2. Esure everyone pairs up with everyone at least once
3. Have meetings after every milestone
4. Conglomerate all tasks in our HackMD
5. Create a sketch of the infrastructure 
6. We agreed that working on the user journey is the most central piece of the project
7. Transfer Requirements into Issues
8. We agreed to follow BEM for classs naming (usefull link here https://css-tricks.com/bem-101/)
9. We will create our app with the mobile first approach in mind
10. We will create a new branch for every new feature / piece of code
11. We will not use capitals in branch names and include either "feature/" or "fix/"

## Planning
1. Ensure common understanding of the "Things to check before you start" section - eg. CORS, oAuth, ENV2
2. Brainstorm API's and how they could work together / go through everyones Idea
3. Agree on final userstory (define MVP)
4. Outline/sketch app architecture (define MVP)
5. Create basic mock up design (define MVP)
6. Create list of requirements
7. Transform requirements into github issues (more granular if needed)

## App Architecture
 A user inputs their postcode into an input field. This must be a valid postcode which is checked against the governement's regez/postcode validator. Once the postcode passes the validation check, an API call is triggered to the Postcode & Geolocation API. This then returns the longitude and latitude data back. 

If the call has been successfull  
![gif of call](https://media.giphy.com/media/qivpB3X5IU5yg/giphy.gif)

The result of the Geolocation API triggers a callback call to the Police UK API with the exact coordinates (as the Police API does not support postcodes), which in itself returns data about reported crimes for a specific month of the year. Through a number of tested function, we extract the crimes by category and display their count to the user to help them make an informed decision before bying a house in that area.

## APIs 
POLICE UK - https://data.police.uk/docs/

Postcode & Geolocation API for the UK - http://postcodes.io/

```javascript
{
"geolocations" : [{
"longitude":  0.629834723775309,
"latitude": 51.7923246977375
}, {
"longitude": -2.49690382054704,
"latitude": 53.5351312861402,
"radius": 1000,
"limit": 5
}]
}
```

APIs we looked into but disappointed us:
Zoopla appears abandoned, whereas Geocode was expensive.  
![sad face](https://media.giphy.com/media/J9h3vpYVuUi52/giphy.gif)


~~ZOOPLA~~ - https://developer.zoopla.co.uk/docs/

~~GEOCODE~~ - https://geocode.xyz/api

