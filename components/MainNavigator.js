import { createStackNavigator } from 'react-navigation';
import TabsNavigator from "./TabsNavigator";
import DeckView from "./DeckView";
import AddCard from "./AddCard";
import QuizDetails from "./QuizDetails";
import { blue, white } from '../utils/colors';

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

export default MainNavigator;