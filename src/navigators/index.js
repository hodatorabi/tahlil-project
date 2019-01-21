import {createStackNavigator} from 'react-navigation'
import Launch from 'src/components/init/Launch'
import AuthNavigator from 'src/navigators/AuthNavigator'
import MainTabNavigator from 'src/navigators/MainTabNavigator'
import ProjectProfile from 'src/components/home/project/ProjectProfile'


const MainNavigator = createStackNavigator(
  {
    Launch: {screen: Launch},
    AuthNavigator: {screen: AuthNavigator},
    MainTabNavigator: {screen: MainTabNavigator},
    ProjectProfile: {screen: ProjectProfile},
  },
  {
    initialRouteName: 'MainTabNavigator',
    headerMode: 'none',
    cardStyle: {backgroundColor: '#F3F5F7'},
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)


export default MainNavigator
