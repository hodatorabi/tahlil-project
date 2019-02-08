import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {
  COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_DEFAULT_GRAY,
  COLOR_WHITE,
} from 'src/assets/styles/colors'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {messages} from 'src/utils/messages'
import Label from 'src/components/common/Label'
import {CHARITY_PROFILE_PIC} from 'src/assets/styles/icons'
import RateItem from 'src/components/profile/feedback/RateItem'
import CharityPersonalInfo from 'src/components/home/charity/CharityPersonalInfo'
import CharityFeedbacks from 'src/components/home/charity/CharityFeedbacks'
import CommonHeader from 'src/components/common/CommonHeader'


const ThirdRoute = (charity) => (
  <CharityPersonalInfo charity={charity}/>
)
const SecondRoute = (charity) => (
  <CharityFeedbacks charity={charity}/>
)


class CharityProfile extends React.Component<Props, State> {

  state = {
    index: 2,
    routes: [
      {key: 'second', title: messages.FEEDBACK},
      {key: 'third', title: messages.INFO},
    ],
  }


  render() {
    const charity = this.props.navigation.getParam('charity', null)

    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <CommonHeader hasBack={true} onPress={() => this.props.navigation.goBack()} title={'خیریه ' + charity.name}/>
        <View style={style.profileHeaderStyle}>

          <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
            <Label text={charity.username} textStyle={{fontSize: 18, color: COLOR_BLACK}}/>
            <RateItem rating={charity.avgRating}/>
          </View>

          <Image source={CHARITY_PROFILE_PIC} style={style.profileAvatar}/>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            second: () => SecondRoute(charity),
            third: () => ThirdRoute(charity),
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
      </View>
    )
  }
}

export default CharityProfile

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
})