# Movily Mobile App
This is the mobile app of Movily. It's built using React Native, Expo, and React Navigation.

## Prerequisites
1. [Node.Js](https://nodejs.org/en/download/)
2. [React Native](https://reactnative.dev/docs/environment-setup)
3. [Yarn](https://yarnpkg.com/getting-started/install)

## Build

To build this project you will need to follow the following steps:
1. Install Packages
2. Configure Environment
3. Run The App

### `Install Packages`

To build this project we first start by installing its dependancies. The best way to install the dependancies is to use expo-cli tool since this app is built using expo, however you can use npm or yarn but this is not advised. The following is the commads for expo-cli, npm and yarn
```bash
# recommended
expo install
# if you use npm then
npm install --save
# if you use yarn then
yarn install
```

### `Configure Environment`

After Installing dependancies, it's time to configure our environment. you will find a templete for the env in the source folder called [env.js.example](./src/env.js.example). This example contains all the needed enviroment congiuraion.

### `Run The App In Debug Mode`

Now you can run the app using in debug mode on metro server `yarn start` or `npm start`. This will enable you test the app using Expo Mobile Client App which is available for both [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [IOS](https://apps.apple.com/us/app/expo-client/id982107779).

### `Build A Release`
Building a release is not a simple process specially if this release is to be published on google play or the app store. Expo provide a very thorough guide for both Android and IOS which you can find [here](https://docs.expo.io/distribution/uploading-apps/).

However, if you want to build a quick test for release mode you can build a release version of you app to test locally on you device. For android you can simply use the following commands:
```bash
# for apk build
expo build:android -t apk
# for appBundle build
expo build:android -t app-bundle
``` 

To build for IOS you will need an App ID which can only be obtianed if you have an apple developer account which you can create [here](https://developer.apple.com/). After this you run the following command to build your release.
```bash
# to build standalone app archive
expo build:ios -t archive
``` 

If you don't want to create an apple developer account expo does provide testing for release build on a simulator. which you can run using the following command.
```bash
# to build standalone app in simulator
expo build:ios -t simulator
``` 

### `Note`
In case you face any issues you can just follow expo guide step by step [here](https://docs.expo.io/distribution/building-standalone-apps/).
