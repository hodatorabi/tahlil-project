import {createStackNavigator} from 'react-navigation'
import {COLOR_WHITE} from 'src/assets/styles/colors'
import Join from 'src/components/init/auth/Join'
import Login from 'src/components/init/auth/Login'


const AuthNavigator = createStackNavigator(
  {
    Join: {screen: Join},
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
    cardStyle: {backgroundColor: COLOR_WHITE},
  },
)

export default AuthNavigator
