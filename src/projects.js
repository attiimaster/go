const projects = [{ "title": "YouVote - create and share polls", 
                    "tagline": "YouVote is a web application where users can create custom polls, share them with friends and get results.",
                    "description": "YouVote is a SPA built with React.js. It connects to MongoDB via an Express API to perform various database-related tasks. Authenticated Users are able to create new polls, although a user may browse and vote without being logged in. Authentication is handled via Facebook's Javascript SDK. YouVote's Explore-Feature let's you discover popular aswell as recent polls. Poll results are displayed with a pie chart diagram powered by chart.js.",
                    "features": [ "Create your own polls and share them with your friends.",
                                      "Poll results are displayed with an easy to read pie chart.",
                                      "Users may add new answers to existing polls from other users.",
                                      "Authentication is being handled via Facebook, therefor you can just use your Facebook account to log in."],
                    "images": [ "youvote-preview.jpg",
                                "youvote-explore.png",
                                "youvote-main.png",
                                "youvote-new.png",
                                "youvote-poll.png",
                                "youvote-my.png" ],
                    "link": "https://youvote.glitch.me",
                    "tech": ["Full-Stack", "React.js", "Node.js", "MongoDB"]},
//
                  { "title": "Weather App", 
                    "tagline": "Check your local weather or look up any location by name or ZIP-code.",
                    "description": "This is a lightweight, mobile-friendly web app to show the current weather based on GeoLocation. This includes data like temperature, airpressure, etc. In the latest update I have added a 5-day forecast that displays the expected minimum and maximum temperature along with fitting weather-based icons. Searching locations by name and ZIP-code is supported aswell since the latest update. For all Fahrenheit users I have added the option to switch temperature units between °C and °F.",
                    "features": [ "Shows you the current weather aswell as a lot of other details like airpressure, windspeed, etc.",
                                      "Enter a city name and find out the current weather and forecast. Simple and easy.",
                                      "Gives you a 5-day weather forecast with temperature and weather details.",
                                      "Easy unit change with the press of a button."],
                    "images": [ "weatherApp-preview.jpg",
                                "weatherApp.png",],
                    "link": "https://attiimaster.github.io/weather-app",
                    "tech": ["Front-End", "jQuery", "Javascript", "API"]}, 
//
                  { "title": "Simon Game", 
                    "tagline": "Simon Says is a classic game where the player has to reproduce a given sequence of button presses. With animation and sound.",
                    "description": "",
                    "features": [ "No library or framework was used. This project was built with vanilla javascript.",
                                      "Button presses give visual and audible feedback aswell as failing to reproduce the given sequence.",
                                      "Choose between Normal Mode (if you fail, you may try again) and Strict Mode (if you fail you lose the game and start from 1)",
                                      "My Feature description 4"],
                    "images": [ "simon-game-preview.jpg",
                                "simon-game.jpg",],
                    "link": "https://attiimaster.github.io/simon-game",
                    "tech": ["Front-End", "Javascript"]},
//
                  { "title": "Get Me a Goddamn Movie!", 
                    "tagline": "A single page app to discover movies. It is powered by TMDB API.",
                    "description": "My girlfriend and I spent way too much time scrolling through Netflix to find something to watch. This is what happened next.",
                    "features": [ "Discover by actor or movie. Additional filter and sort functionality.",
                                  "Results are paginated to ensure a crisp performance throughout.",
                                  "The app is linked with Youtube so you can watch trailers without searching first.",
                                  "Be up to date on new movie releases and popular movies within the community."],
                    "images": [ "GMAGM-preview.jpg",
                                "GMAGM.jpg",
                                "GMAGM1.jpg",
                                "GMAGM2.jpg", ],
                    "link": "https://attiimaster.github.io/Get-Me-a-Goddamn-Movie",
                    "tech": ["Front-End", "React.js", "API"]}, 
//
                  { "title": "Choropleth Visualization", 
                    "tagline": "A map showing percentages of adults of age 25 and older with a bachelor's degree or higher (2010-2014)",
                    "description": "A project I made while learning about d3.js, a data visualization library. It visualizes the percentage of adults that have a bachelor's degree or higher. The greener a county is displayed, the higher the percentage.",
                    "features": [ "Interactive. Hover over counties to see the percentage and the name."],
                    "images": [ "choropleth-map-preview.jpg",
                                "choropleth-map-preview.jpg",],
                    "link": "https://attiimaster.github.io/choropleth_map",
                    "tech": ["Data Visualization", "d3.js", "Javascript"]}, 
//
                  { "title": "simple hotel landing page", 
                    "tagline": "My client wanted simple, easy to navigate landing page for his hotel to add to his online presence.",
                    "description": "Please note: I had to remove any personal information and images. \n\nA simplistic landing page where potential customers can get basic information like address and contact details. A gallery has been implemented where users can browse through images. A embedded Google Maps View makes route & trip planning easier for any customers aswell as a contact form, so potential customers can get in contact directly from the website quick and easy.",
                    "features": [ "Simple design and clear structure",
                                      "Integrated Google Maps API",
                                      "Contact Form",],
                    "images": [ "hotel-preview.jpg",
                                "hotel.jpg",
                                "hotel1.png",
                                "hotel2.jpg"],
                    "link": "",
                    "tech": ["Front-End", "Website", "Javascript", "HTML5/CSS3"]}, 
//
                  { "title": "For Reddit, to Go", 
                    "tagline": "Listen to Reddit while getting stuff done - through the power of Text to Speech.",
                    "description": "Currently in BETA. The link to the project is working but you may encounter unintended behaviour. Everything is subject to change.",
                    "features": [ "Comming soon",],
                    "images": [ "frtg.png",
                                "frtg.png",],
                    "link": "https://attiimaster.github.io/ForRedditToGo",
                    "tech": ["Front-End", "React.js", "Javascript", "HTML5/CSS3"]}, 
//
                  { "title": "FoodShare", 
                    "tagline": "A PAAS (Platform As A Service) that aims to reduce the amount of good food that gets thrown away.",
                    "description": "Coming soon",
                    "features": [ "Comming soon",],
                    "images": [ "placeholder.jpg",],
                    "link": "",
                    "tech": ["Full-Stack", "React.js", "Node.js", "Redux"]}, 
//
                  { "title": "QuoteFactory", 
                    "tagline": "WORK IN PROGRESS",
                    "description": "Coming soon",
                    "features": [ "Comming soon",],
                    "images": [ "placeholder.jpg",],
                    "link": "",
                    "tech": ["Full-Stack", "React.js", "Node.js"]}, 
];
//
export default projects;