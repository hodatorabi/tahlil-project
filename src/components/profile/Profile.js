import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {
  COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_DEFAULT_GRAY,
  COLOR_WHITE,
} from 'src/assets/styles/colors'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {messages} from 'src/utils/messages'
import PersonalInfo from 'src/components/profile/PersonalInfo'
import AbilityPopUp from 'src/components/common/popUps/AbilityPopUp'
import VerifyPopUp from 'src/components/common/popUps/VerifyPopUp'
import Feedbacks from 'src/components/profile/feedback/Feedbacks'
import Label from 'src/components/common/Label'
import {DEFAULT_PROFILE_PIC, ICON_LOG_OUT} from 'src/assets/styles/icons'
import NavigationService from 'src/utils/navigationService'
import Auth from '../../store/auth'
import RateItem from './feedback/RateItem'

const ThirdRoute = (onAddPress, onRemovePress) => (
  <PersonalInfo onAddPress={onAddPress} onRemovePress={onRemovePress}/>
)
const SecondRoute = () => (
  <Feedbacks/>
)

const FirstRoute = () => (
  <View/>
)

class Profile extends React.Component<Props, State> {

  state = {
    addAbilityPopUpVisible: false,
    removeAbilityPopUpVisible: false,
    itemToRemove: '',
    logoutPopup: false,
    index: 2,
    routes: [
      {key: 'first', title: messages.SCHEDULE},
      {key: 'second', title: messages.FEEDBACK},
      {key: 'third', title: messages.INFO},
    ],
  }

  constructor(props) {
    super(props)

    this.onPressAddAbility = this.onPressAddAbility.bind(this)
    this.onPressRemoveAbility = this.onPressRemoveAbility.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.props.getVolunteerTimeSlots()
      },
    )
  }

  onPressAddAbility = () => {
    this.setState({addAbilityPopUpVisible: true})
  }
  onPressRemoveAbility = (item) => {
    console.log(item)
    this.setState({removeAbilityPopUpVisible: true, itemToRemove: item})
  }

  onLogout = () => {
    this.props.logout()
    NavigationService.reset(['AuthNavigator'])
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <View style={style.profileHeaderStyle}>
          <TouchableOpacity
            onPress={() => this.setState({logoutPopup: true})}
            style={style.logoutButton}>
            <Image source={ICON_LOG_OUT} style={{width: 25, height: 25, marginLeft: 7}}
                   tintColor={COLOR_BLUE_DEFAULT}/>
          </TouchableOpacity>

          <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
            <Label text={this.props.volunteer.username} textStyle={{fontSize: 18, color: COLOR_BLACK}}/>
            <RateItem rating={this.props.volunteer.avgRating}/>
          </View>

          <Image source={DEFAULT_PROFILE_PIC} style={style.profileAvatar}/>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: () => ThirdRoute(this.onPressAddAbility, this.onPressRemoveAbility),
          })}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: SCREEN_WIDTH}}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={{
                backgroundColor: COLOR_WHITE,
                elevation: 0,
                borderBottomColor: COLOR_DEFAULT_GRAY,
                borderBottomWidth: 0.5,
              }}
              indicatorStyle={{backgroundColor: COLOR_BLUE_DEFAULT}}
              labelStyle={{color: COLOR_DARK_BLUE, fontFamily: 'IRANSansMobile'}}
            />
          }
        />
        <AbilityPopUp visible={this.state.addAbilityPopUpVisible}
                      onDismiss={() => this.setState({addAbilityPopUpVisible: false})}/>
        <VerifyPopUp visible={this.state.removeAbilityPopUpVisible}
                     verifyText={messages.REMOVE_ABILITY}
                     onVerify={() => {
                       this.props.removeAbility(this.state.itemToRemove)
                       this.setState({removeAbilityPopUpVisible: false})
                     }}
                     onDismiss={() => this.setState({removeAbilityPopUpVisible: false})}/>
        <VerifyPopUp visible={this.state.logoutPopup}
                     verifyText={messages.LOGOUT_MESSAGE}
                     onVerify={this.onLogout}
                     onDismiss={() => this.setState({logoutPopup: false})}/>
      </View>
    )
  }
}

export default Auth.providers.auth(Profile)

const style = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileHeaderStyle: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    paddingVertical: 0.03 * SCREEN_HEIGHT,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomColor: COLOR_DEFAULT_GRAY,
    borderBottomWidth: 0.5,
  },
  profileAvatar: {width: 60, height: 60, borderRadius: 30, marginLeft: 20},
  logoutButton: {position: 'absolute', top: 15, left: 10, flexDirection: 'row', alignItems: 'center'},
})