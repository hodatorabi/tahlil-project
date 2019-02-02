import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SPLASH_LOGO} from 'src/assets/styles/icons'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import Spinner from 'react-native-spinkit'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import NavigationService from 'src/utils/navigationService'
import {messages} from 'src/utils/messages'
import {AsyncStorageGetItem} from '../../utils/asyncStorage'
import Auth from '../../store/auth'
import Projects from '../../store/projects'

class Launch extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({loading: true}, () => {
      AsyncStorageGetItem('jwtToken')
        .then((token) => {
          if (token == null || token === '') {
            setTimeout(() => NavigationService.reset(['AuthNavigator']), 2000)
          } else {
            AsyncStorageGetItem('isVolunteer')
              .then((isVolunteer) => {
                if (isVolunteer == null || isVolunteer === '') {
                  setTimeout(() => NavigationService.reset(['AuthNavigator']), 2000)
                } else {
                  this.props.setToken(token)
                  this.props.setIsVolunteer(isVolunteer)
                  if (this.props.isVolunteer) {
                    this.props.getProfile()
                      .catch((error) => {
                        this.props.logout()
                        console.log('get profile error', error)
                      })
                    this.props.getAbilities()
                    this.props.getNonCashProjects()
                    this.props.getCashProjects()
                    this.props.getOutgoingRequests()
                    this.props.getIncomingRequests()
                    this.props.getVolunteerTimeSlots()
                    setTimeout(() => NavigationService.reset(['MainTabNavigator']), 2000)
                  } else {
                    this.props.getCharityOutgoingRequests()
                    this.props.getCharityIncomingRequests()
                    setTimeout(() => NavigationService.reset(['CharityMainTabNavigator']), 2000)
                  }
                }
              })
          }
        })
        .catch(() => {
            this.props.logout()
            NavigationService.reset(['AuthNavigator'])
          },
        )
    })
  }

  render() {
    return (
      <View style={style.launchContainer}>
        <Image source={SPLASH_LOGO} style={style.splashImageStyle}/>
        <Label text={messages.APP_DESCRIPTION}/>
        <Spinner style={{position: 'absolute', bottom: 60}} isVisible={this.state.loading} color={COLOR_BLUE_DEFAULT}
                 type={'Circle'}/>
      </View>
    )
  }
}

export default Projects.providers.projects(Auth.providers.auth(Launch))

const style = StyleSheet.create({
  launchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    width: 0.7 * SCREEN_WIDTH,
    resizeMode: 'contain',
  },

})