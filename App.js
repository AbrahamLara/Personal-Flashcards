import React from 'react';
import { AsyncStorage, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { DECKS_STORAGE_KEY } from './utils/_DATA';
import { blue } from './utils/colors';
import AddDeck from './components/AddDeck';
import DecksList from './components/DecksList';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

function NativeStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const TabsNavigator = createBottomTabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='library-books' size={30} color={tintColor}/>
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='library-add' size={30} color={tintColor}/>
    }
  }
});

const AppNavigator = createAppContainer(TabsNavigator);

export default class App extends React.Component {
  render() {
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
