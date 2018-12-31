import {createStackNavigator} from 'react-navigation'
import Launch from 'src/components/init/Launch'
import {COLOR_WHITE} from 'src/assets/styles/colors'


const MainNavigator = createStackNavigator(
  {
    Launch: {screen: Launch},
    // AuthNavigator: {screen: AuthNavigator},
    // MainTabNavigator: {screen: MainTabNavigator},
    // NewUserNavigator: {screen: NewUserNavigator},
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
