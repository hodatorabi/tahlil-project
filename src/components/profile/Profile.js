import React from 'react'
import {StyleSheet, View} from 'react-native'
import {messages} from 'src/utils/messages'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import CommonHeader from 'src/components/common/CommonHeader'

const FirstRoute = () => (
  <View/>
)
const SecondRoute = () => (
  <View/>
)
const ThirdRoute = () => (
  <View/>
)

class Profile extends React.Component<Props, State> {

  state = {
    index: 0,
    routes: [
      {key: 'first', title: messages.CHARITY},
      {key: 'second', title: messages.VOLUNTEER},
      {key: 'third', title: messages.VOLUNTEER},
    ],
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <CommonHeader hasBack={false} title={'ویرایش مشخصات و توانمندی‌ها'}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
          })}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: SCREEN_WIDTH}}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={{backgroundColor: COLOR_WHITE}}
              indicatorStyle={{backgroundColor: COLOR_BLUE_DEFAULT}}
              labelStyle={{color: COLOR_DARK_BLUE, fontFamily: 'IRANSansMobile'}}
            />
          }
        />
      </View>
    )
  }
}

export default Profile

const style = StyleSheet.create({})