This is the exercise repo of udacity exercise project 2


# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.



## How to install and launch the project

In the project directory, you can run:

### `yarn install`

Runs this to install all the project dependencies

### `yarn start`

## Structure

```bash
├── README.md - This file.
├── package.json # yarn package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── manifest.json # Project manifest
│   └── index.html # DO NOT MODIFY
│   ├── logo.png # React logo
│   ├── favicon.ico # React Icon
│   ├──  icons # users avatars
│   │    ├── tylor.png
│   │    ├── sarah.png
│   │    ├── dan.png
└── src
    ├── Components # Contain all the components that renders the UI
    │   ├── Dashboard.js  #Dashboard controller
    │   ├── DetailedPoll.js  #Display poll details
    │   ├── ErrorPage.js  #Exception handler
    │   ├── Footer.js  #display project credits
    │   ├── Leaderboard.js  #Leaderboard handler
    │   ├── LeaderProfile.js #detailed view of leader profile
    │   ├── Navbar.js  #Navigation menu handler
    │   ├── NewQuestion.js  #Add new poll question handler
    │   ├── PollResults.js  #Show results handler
    │   ├── Question.js  #Poll question data handler
    │   ├── UndetailedPoll.js  #show poll list loop
    ///Actions
    │   ├── Actions #actions files
    │   │     ├── authenticatedAgent.js #Handle user authentication
    │   │     ├── questions.js #Question actions logic
    │   │     ├── shared.js #shared logic
    │   │     ├── users.js #Users actions logic
    ///Middleware
    │   ├── Actions #actions files
    │   │     ├── authenticatedAgent.js #Thunk
    │   │     ├── questions.js #console logger logic
    │   │     ├── index.js #console logger logic
    │   │     ├── users.js #users reducer
     ///Reducers
    │   ├── reducers #actions files
    │   │     ├── index.js #reducer combiner
    │   │     ├── authenticatedAgent.js #authenticated user set
    │   │     ├── questions.js #questions reducer
    │   │     ├── users.js #users reducer
     ///project utils
    ├── utils # Helpful images for your app. Use at your discretion.
    │   ├── _DATA_.js # simulation data 
    │   ├── api.js #A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    │   └── helpers.js #various hellper functions format data ,text ..Etc
```
