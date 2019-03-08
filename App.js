import React from 'react';
import { View, AsyncStorage } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { DECKS_STORAGE_KEY } from './utils/_DATA';
import { setLocalNotifiation, clearLocalNotification } from './utils/helpers';
import MainNavigator from './components/MainNavigator';
import NativeStatusBar from './components/NativeStatusBar';
import { blue } from './utils/colors';

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotifiation();
  }
  render () {
    // For temporary use
    // AsyncStorage.removeItem(DECKS_STORAGE_KEY);
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NativeStatusBar backgroundColor={blue} barStyle='light-content' />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}