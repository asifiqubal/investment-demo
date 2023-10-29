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

![Auth](https://github.com/asifiqubal/investment-demo/assets/21161336/28fe1aa9-3a30-47ae-8698-77f06237a1fe)
![Company List](https://github.com/asifiqubal/investment-demo/assets/21161336/3c286789-6a55-4d8b-91d3-018228fa84be)
![Company Details](https://github.com/asifiqubal/investment-demo/assets/21161336/33609149-880c-41b5-8c6d-7bdafa0abdd4)
