import React from 'react'
import {Image, StyleSheet, View, ToastAndroid, ScrollView, RefreshControl} from 'react-native'
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
import Label from 'src/components/common/Label'
import {DEFAULT_PROFILE_PIC} from 'src/assets/styles/icons'
import RateItem from 'src/components/profile/feedback/RateItem'
import CommonHeader from 'src/components/common/CommonHeader'
import VolunteerPersonalInfo from 'src/components/charity/home/volunteer/VolunteerPersonalInfo'
import CharityRequestPopup from 'src/components/common/popUps/CharityRequestPopup'
import Projects from 'src/store/projects'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'

const ThirdRoute = (volunteer, onPressButton) => (
  <VolunteerPersonalInfo person={volunteer} onPressButton={onPressButton}/>
)
const SecondRoute = (volunteer) => (
    <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
            {volunteer.receivedFeedback.length > 0 ? volunteer.receivedFeedback.map((item, index) => (
                <FeedbackItem charity={false} feedback={item}/>
            )) : <Label text={'NO FEEDBACK'}/>}
        </ScrollView>
    </View>
)

class VolunteerProfile extends React.Component<Props, State> {

  state = {
    popupVisible: false,
    index: 2,
    routes: [
      {key: 'second', title: messages.FEEDBACK},
      {key: 'third', title: messages.INFO},
    ],
  }

  constructor(props) {
    super(props)

    this.onPressButton = this.onPressButton.bind(this)
  }

  onPressButton = () => {
    this.setState({popupVisible: true})
  }


  render() {
    const volunteer = this.props.navigation.getParam('volunteer', null)
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <CommonHeader title={messages.VOLUNTEER_PROFILE} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
        <View style={style.profileHeaderStyle}>
          <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
            <Label text={volunteer.username} textStyle={{fontSize: 18, color: COLOR_BLACK}}/>
            <RateItem rating={volunteer.avgRating}/>
          </View>

          <Image source={DEFAULT_PROFILE_PIC} style={style.profileAvatar}/>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            second: () => SecondRoute(volunteer),
            third: () => ThirdRoute(volunteer, this.onPressButton),
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
        <CharityRequestPopup visible={this.state.popupVisible} onDismiss={() => this.setState({popupVisible: false})}
                             onSend={(message, projectId) => {
                               this.props.sendRequestToVolunteer(projectId, volunteer.id, message)
                                 .then(() => {
                                   this.props.getCharityOutgoingRequests()
                                 })
                                 .catch((error) => {
                                   console.log('err send request volunteer', error)
                                   ToastAndroid.show('امکان ارسال این درخواست نیست.', ToastAndroid.SHORT)
                                 })
                             }}/>
      </View>
    )
  }
}

export default Projects.providers.projects(VolunteerProfile)

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