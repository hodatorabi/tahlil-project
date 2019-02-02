import {createStackNavigator} from 'react-navigation'
import Launch from 'src/components/init/Launch'
import AuthNavigator from 'src/navigators/AuthNavigator'
import MainTabNavigator from 'src/navigators/MainTabNavigator'
import ProjectProfile from 'src/components/home/project/ProjectProfile'
import SearchPage from 'src/components/home/search/SearchPage'
import CashFilterPage from 'src/components/home/search/CashFilterPage'
import NonCashFilterPage from 'src/components/home/search/NonCashFilterPage'
import CharityMainTabNavigator from './CharityMainTabNavigator'
import CharityProjectProfile from 'src/components/charity/home/project/CharityProjectProfile'


const MainNavigator = createStackNavigator(
  {
    Launch: {screen: Launch},
    AuthNavigator: {screen: AuthNavigator},
    MainTabNavigator: {screen: MainTabNavigator},
    ProjectProfile: {screen: ProjectProfile},
    SearchPage: {screen: SearchPage},
    CashFilterPage: {screen: CashFilterPage},
    NonCashFilterPage: {screen: NonCashFilterPage},
    CharityMainTabNavigator: {screen: CharityMainTabNavigator},
    CharityProjectProfile: {screen: CharityProjectProfile}
  },
  {
    initialRouteName: 'Launch',
    headerMode: 'none',
    cardStyle: {backgroundColor: '#F3F5F7'},
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)


export default MainNavigator
