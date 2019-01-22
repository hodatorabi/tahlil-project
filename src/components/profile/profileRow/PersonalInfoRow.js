import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK} from 'src/assets/styles/colors'


class PersonalInfoRow extends React.Component<Props, void> {

  render() {
    return (
      <View style={[style.containerStyle]}
      >
        <View style={style.inputStyle}>
          <Text style={style.textStyle}>{this.props.description}</Text>
          <Text style={style.textStyle}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}

export default PersonalInfoRow

const style = StyleSheet.create({
  containerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
  },
  inputStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: COLOR_BLACK,
    fontSize: 16,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})