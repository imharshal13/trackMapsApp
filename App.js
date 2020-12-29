import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvivder } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import AccountScreen from './src/screens/AccountScreen';
import LodingScreen from './src/screens/LoadingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SigninScreen from './src/screens/SinginScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TracksCreateScreen from './src/screens/TracksCreateScreen';
import TracksDetailsScreen from './src/screens/TracksDetailsScreen';


const switchNavigator = createSwitchNavigator({
  Loading: LodingScreen, // used for when user is sign in 
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SigninScreen

  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TracksDetails: TracksDetailsScreen
    }),
    Account: AccountScreen,
    CreateTrack: TracksCreateScreen,
  }),

});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvivder>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvivder>
  );

};


// ref={(navigator) => { setNavigator(navigator) }} => 
//  setNavigator function is called as a props in the App component as it is formed by the navigator;
// so we can access the nav outside the navigator .