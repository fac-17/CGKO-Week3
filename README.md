## API week project

Team: 
[Gigi](github.com/gminova)
[Tony](github.com/tonylomax)
[Francesca](github.com/frannyfra)
[Christine](github.com/xIrusux)



# Aim 

Your project this week is to build a simple web app (ideally just a single page). You must query at least two APIs and use the results to update the DOM.

What you choose to build and how you choose to display the data is entirely up to you!

During the planning phase we suggest you spend time on:

- Exploring APIs you are interested in working with
- Considering your user journey
- Deciding what you need to build for your Minimum Viable Product (MVP) and splitting up the tasks

You'll have most of day 3 and all of day 4 to work on your project. On day 5 we'll have code reviews in the morning and final presentations in the afternoon.

# Install

1. Clone the repo
2. npm install
3. Launch! 
n.b. no keys required, both API's are opensource/keyless

### "Code of conduct"
#### (How we agreed to work together in this team)

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

#### "Pre-work"
1. Look through API list https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-3/recommended-apis.md and pick the ones you like the most - how could they work together?
2. Keep the "Things to check before you start:" - section in mind in case you have found an API that is not listed (ensure your research is halfway thorough)

#### Planning
1. Ensure common understanding of the "Things to check before you start" section - eg. CORS, oAuth, ENV2
2. Brainstorm API's and how they could work together / go through everyones Idea
3. Agree on final userstory (define MVP)
4. Outline/sketch app architecture (define MVP)
5. Create basic mock up design (define MVP)
6. Create list of requirements
7. Transform requirements into github issues (more granular if needed)

### User Story

Young family expecting a baby and they are looking for a place in a safe area. 

They have an idea about where they want to live but they would love to check how safe is the area. They want want to know both whether they can afford the area and how safe it is.  

//

> After the issues with our first API choice we had to change the user story slightly:

Young family expecting a baby and they are looking for a place in a safe area. 

They have an idea about where they want to live but they would love to check how safe is the area. They only want to know how safe the area is.


...


### App Architecture

Zed-index to inform outcode(the first part of a UK postcode, short for “outward code”) to latitude and longitude conversion;




...
### APIs 
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

