import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {
  COLOR_BLACK,
  COLOR_BLUE_DEFAULT,
  COLOR_DARK_BLUE,
  COLOR_DEFAULT_GRAY,
  COLOR_WHITE,
} from 'src/assets/styles/colors'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {messages} from 'src/utils/messages'
import VerifyPopUp from 'src/components/common/popUps/VerifyPopUp'
import Label from 'src/components/common/Label'
import {CHARITY_PROFILE_PIC, ICON_LOG_OUT} from 'src/assets/styles/icons'
import NavigationService from 'src/utils/navigationService'
import RateItem from 'src/components/profile/feedback/RateItem'
import Auth from 'src/store/auth'
import CharityPersonalInfo from 'src/components/charity/profile/PersonalInfo/CharityPersonalInfo'


const ThirdRoute = () => (
  <CharityPersonalInfo/>
)
const SecondRoute = () => (
  <View/>
)


class CharityProfile extends React.Component<Props, State> {

  state = {
    addAbilityPopUpVisible: false,
    removeAbilityPopUpVisible: false,
    itemToRemove: '',
    logoutPopup: false,
    index: 2,
    routes: [
      {key: 'second', title: messages.FEEDBACK},
      {key: 'third', title: messages.INFO},
    ],
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
            <Label text={this.props.charity.username} textStyle={{fontSize: 18, color: COLOR_BLACK}}/>
            <RateItem rating={this.props.charity.avgRating}/>
          </View>

          <Image source={CHARITY_PROFILE_PIC} style={style.profileAvatar}/>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            second: SecondRoute,
            third: ThirdRoute,
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
        <VerifyPopUp visible={this.state.logoutPopup}
                     verifyText={messages.LOGOUT_MESSAGE}
                     onVerify={this.onLogout}
                     onDismiss={() => this.setState({logoutPopup: false})}/>
      </View>
    )
  }
}

export default Auth.providers.auth(CharityProfile)

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