import {createStackNavigator} from 'react-navigation'
import Launch from 'src/components/init/Launch'
import {COLOR_WHITE} from 'src/assets/styles/colors'
import AuthNavigator from 'src/navigators/AuthNavigator'
import MainTabNavigator from 'src/navigators/MainTabNavigator'


const MainNavigator = createStackNavigator(
  {
    Launch: {screen: Launch},
    AuthNavigator: {screen: AuthNavigator},
    MainTabNavigator: {screen: MainTabNavigator},
  },
  {
    initialRouteName: 'Launch',
    headerMode: 'none',
    cardStyle: {backgroundColor: COLOR_WHITE},
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)


export default MainNavigator
