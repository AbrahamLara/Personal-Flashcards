import React from 'react';
import { AsyncStorage, StatusBar, StyleSheet, Text, View } from 'react-native';
import DecksList from './components/DecksList';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { DECKS_STORAGE_KEY } from './utils/_DATA';
import { blue } from './utils/colors';
import AddDeck from './components/AddDeck';

function NativeStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    // For temporary use
    // AsyncStorage.removeItem(DECKS_STORAGE_KEY);
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NativeStatusBar backgroundColor={blue} barStyle='light-content' />
          <AddDeck />
        </View>
      </Provider>
    );
  }
}
