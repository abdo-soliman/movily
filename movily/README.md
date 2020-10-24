# Movily Web App
This is the web app of Movily. It's built using React, React Bootstrap and React Router.

## Prerequisites
1. [Node.Js](https://nodejs.org/en/download/)
2. [Yarn (optional)](https://yarnpkg.com/getting-started/install)

## Build

To build this project you will need to follow the following steps:
1. Install Packages
2. Configure Environment
3. Run The App

### `Install Packages`

To build this project we first start by installing its dependancies. To install the dependancies use either of the following command based on package manager you prefer.
```bash
# if you are using npm then
npm install --save
# if you are using yarn then
yarn install
```

### `Configure Environment`

After Installing dependancies, it's time to configure our environment. You will find a templete for the env in the source folder called [env.js.example](./src/env.js.example), this example contains all the needed enviroment congiuraion. You will need to register for a [free TMDB account](https://www.themoviedb.org/signup) and [request a free API key](https://www.themoviedb.org/settings/api) to be able to use this application. After obtaining you api key you will set it in the env.js as the corresponding value for `tmdbApiKey`.

### `Run The App`

Now you can run the app using `yarn start` or `npm start`.
