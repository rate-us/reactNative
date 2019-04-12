import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import tabBarIcon from './utils/tabBarIcon';
import FeedScreen from './screens/FeedScreen';
import NewPostScreen from './screens/NewPostScreen';
import SelectPhotoScreen from './screens/SelectPhotoScreen';

const navigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('home'),
      },
    },
    Photo: {
      screen: SelectPhotoScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('add-circle'),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: navigator,
      // Set the title for our app when the tab bar screen is present
      navigationOptions: { title: 'Instaham 🐷' },
    },
    // This screen will not have a tab bar
    NewPost: NewPostScreen,
  },
  {
    cardStyle: { backgroundColor: 'white' },
  },
);

export default stackNavigator;
