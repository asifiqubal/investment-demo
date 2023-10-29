# Seeders: InvestmentDemo

A mobile application built using React Native and [Seeder's dummy](https://developers.themoviedb.org/3) api.

## Installation

### Step-1

Clone the app repository

- `git clone https://github.com/asifiqubal/investment-demo.git`

### Step-2

In the root directory

- Install dependencies: `yarn install` or `npm install`

### Step-3

- App run

### iOS

In the `ios` directory

- Install Pods: `pod install`
- Launch: `open InvestmentDemo.xcworkspace` with yor xcode
- Select an emulator from xcode and press run
- Or you can run the app by using these commands `react-native run-ios / npx react-native run-ios` from the project root directory

### Android

- Open `android` directory with Android Studio and sync gradle.
- Open terminal is root directory run:`react-native run-android / npx react-native run-android`
- You might need to do this to run it in Android Studio or on real device: `adb reverse tcp:8081 tcp:8081`
- And for the sample server: `adb reverse tcp:3000 tcp:3000`

## App Screenshot

![Auth](https://github.com/asifiqubal/investment-demo/assets/21161336/3e7b8a9c-12a2-4b2d-bead-747804bda43b)
![Company List](https://github.com/asifiqubal/investment-demo/assets/21161336/928b5b28-d062-49b0-96d2-35d56135a5f4)
![Company Details](https://github.com/asifiqubal/investment-demo/assets/21161336/d6c93a80-5c05-484e-9158-2b20d76411c0)
