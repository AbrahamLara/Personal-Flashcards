import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import DecksList from './components/DecksList';
import { Constants } from 'expo';

function NativeStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NativeStatusBar backgroundColor='#9cf' barStyle='light-content' />
        <DecksList />
      </View>
    );
  }
}
