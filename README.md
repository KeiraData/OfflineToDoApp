<h1>Basic example of mobile offline-first app (To Do app)</h1>

This repository shows how to built a basic example of a mobile app using **React Native, Redux and Redux Offline.**

# Prerequisites to setup the development environment

The project was built in a Mac system and for Android devices. For this is needed the following:

> [Here can be found a more detailed explanation in the official documentation](https://reactnative.dev/docs/environment-setup)

- Nodejs
- Watchman
- adoptopenjdk/openjdk/adoptopenjdk8
- Android Studio (for the virtual devices)
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device
  - Setup of the environment variables
- XCode and their command line tools
- Cocoapods

# How to run the application?

For get the app running follow this steps:

1. For Android:
   1. Open Android Studio.
   2. Open the AVD Manager (and crete a new device if there not any) and run any device.
   3. Also is possible to use a real device connecting this to the computer using a USB cable. You need to enable the development options in your device.
   4. Run `npx react-native start` to get Metro started.
   5. Run `npx react-native run-android`to start the app in the device.
2. For iOS:
   1. Reun `npx react-native start` to get Metro started.
   2. Run `npx react-native run-ios` to start the app in the device. **Note:** you need to have downloaded a device in the XCode suite, this will initiates automatically.