import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_WHITE} from 'src/assets/styles/colors'


class IncomingRequest extends React.Component<Props, void> {

  render() {
    return (
      <View style={style.containerStyle}/>
    )
  }
}

export default IncomingRequest

const style = StyleSheet.create({
  containerStyle: {
    height: SCREEN_HEIGHT * 0.35,
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 20,
    backgroundColor: COLOR_WHITE,
    alignSelf: 'center',
  },
})