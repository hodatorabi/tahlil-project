import React from 'react'
import {Keyboard, StyleSheet, Text, View} from 'react-native'
import {commonHeaderHeight, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_DARK_BLUE} from 'src/assets/styles/colors'
import Back from 'src/components/common/Back'


class CommonHeader extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[style.commonHeader]}>
        <Text style={style.commonHeaderTitle}>{this.props.title}</Text>
        <Back onPress={() => {
          Keyboard.dismiss()
          this.props.onPress()
        }}
        />
      </View>
    )
  }
}

export default CommonHeader

const style = StyleSheet.create({
  commonHeader: {
    height: commonHeaderHeight,
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonHeaderTitle: {
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    color: COLOR_DARK_BLUE,
    fontFamily: 'IRANSansMobile',
  },
})
