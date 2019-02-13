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
import VolunteerSearchPage from 'src/components/charity/home/search/VolunteerSearchPage'
import VolunteerProfile from 'src/components/charity/home/volunteer/VolunteerProfile'
import VolunteersListPage from 'src/components/charity/home/volunteer/VolunteersListPage'
import VolunteerProjectsPage from 'src/components/home/project/VolunteerProjectsPage'
import CharityProfile from 'src/components/home/charity/CharityProfile'
import NewNonCashProject from 'src/components/charity/home/project/newProject/NewNonCashProject'
import NewCashProject from 'src/components/charity/home/project/newProject/NewCashProject'
import NewNonCashProjectTimeSlots from 'src/components/charity/home/project/newProject/NewNonCashProjectTimeSlots'
import VolunteerFilterPage from 'src/components/charity/home/search/VolunteerFilterPage'
import VolunteerTransactionsPage from 'src/components/charity/home/volunteer/VolunteerTransactionsPage'


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
    CharityProjectProfile: {screen: CharityProjectProfile},
    VolunteerSearchPage: {screen: VolunteerSearchPage},
    VolunteerProfile: {screen: VolunteerProfile},
    VolunteersListPage: {screen: VolunteersListPage},
    VolunteerProjectsPage: {screen: VolunteerProjectsPage},
    CharityProfile: {screen: CharityProfile},
    NewNonCashProject: {screen: NewNonCashProject},
    NewCashProject: {screen: NewCashProject},
    NewNonCashProjectTimeSlots: {screen: NewNonCashProjectTimeSlots},
    VolunteerFilterPage: {screen: VolunteerFilterPage},
    VolunteerTransactionsPage: {screen: VolunteerTransactionsPage}
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
