import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import IncomingRequests from 'src/components/requests/Incoming/IncomingRequests'
import {messages} from 'src/utils/messages'
import OutgoingRequests from 'src/components/requests/Outgoing/OutgoingRequests'

const FirstRoute = (navigation) => (
  <IncomingRequests navigation={navigation}/>
)
const SecondRoute = (navigation) => (
  <OutgoingRequests navigation={navigation}/>
)

export default class Requests extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: messages.INCOMING_REQUESTS},
      {key: 'second', title: messages.OUTGOING_REQUESTS},
    ],
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: (navigation) => FirstRoute(navigation),
            second: (navigation) => SecondRoute(navigation),
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