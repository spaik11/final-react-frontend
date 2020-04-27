# Final Project
## About
In this final project, I decided to go with a dashboard theme. On the side panel, you will see a Spotify player with the lo-fi hip hop music playlist. We have two main links, the Overwatch page and the Covid-19 stats page.

### Overwatch
On this page, a user that registers with an Overwatch Id will be able to see their player card. If you are logged in, your card will have a black border surrounding it. Please note that the API will only recognize PC players (sorry console).

### Covid-19 Stats

This page will render a chart of the active cases of Covid-19. The user will be able to filter by country.

## Routes & Links
User routes using JWT (JSON Web Token) 

    /login
    /logout
    /register
    /profile
    /getAllUsers


Two main page links to render 

    /ow
    /covid

## Dependencies

### Overwatch API
API Url - https://ovrstat.com/

### Covid-19
API Url - https://covid19.mathdro.id/api

## NPM Packages
`Front-end`

    Axios - Promise based HTTP client for the browser and node.js
    React Chart JS 2 - JS charting for designers & devs
    Count Up - Create animations that display numerical data
    React Router Dom - A collection of navigational components
    Toastify - Allows you to add interesting notifications with ease
    Classnames - A simple JS utility for conditionally joining classNames together
    Loader-Spinner - Provides simple React spinner component
    Material UI - React UI framework

`Back-end`

    Axios
    Async
    BcryptJS
    Dotenv
    Express
    JWT (JSON Web Token)
    Passport
    MongoDB
    Mongoose

## Available Scripts

## Front-end
In the project *front-end* directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Back-end

Create a .env file and include the MONGODB_URI link and the ACCESS_TOKEN_SECRET before you run the server.

In the project *back-end* directory, you can run:

### `npm install`
### `npm run dev`

Runs the server for the app.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
