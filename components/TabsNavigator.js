import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import DecksList from './DecksList';
import AddDeck from './AddDeck';
import { blue, white, lightgray, gray } from '../utils/colors';

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
}, {
  navigationOptions: {
    headerTitle: 'Personal Flashcards',
    headerBackTitle: 'Back',
    headerForceInset: true,
    headerTintColor: white,
    headerStyle: {
      backgroundColor: blue,
    },
    headerTitleStyle: {
      fontSize: 25
    }
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    inactiveTintColor: Platform.OS === 'ios' ? gray : lightgray,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : blue,
    }
  }
})

export default TabsNavigator;