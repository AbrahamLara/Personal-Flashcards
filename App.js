import React from 'react';
import { AsyncStorage, StatusBar, View, Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { Constants } from 'expo';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { DECKS_STORAGE_KEY } from './utils/_DATA';
import { blue, white, lightgray, gray } from './utils/colors';
import AddDeck from './components/AddDeck';
import DecksList from './components/DecksList';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';
import QuizDetails from './components/QuizDetails';
import { setLocalNotifiation, clearLocalNotification } from './utils/helpers';

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

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabsNavigator
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerForceInset: true,
      headerBackTitle: 'Back',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTitle: 'Add Card',
      headerForceInset: true,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  },
  QuizDetails: {
    screen: QuizDetails,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerBackTitle: 'Back',
      headerForceInset: true,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  }
})

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