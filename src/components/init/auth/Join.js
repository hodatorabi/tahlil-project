import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: COLOR_WHITE}]}/>
)
const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: COLOR_WHITE}]}/>
)

export default class Join extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: messages.CHARITY},
      {key: 'second', title: messages.VOLUNTEER},
    ],
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <CommonHeader title={messages.SIGN_UP} onPress={() => this.props.navigation.goBack()}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
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

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
})