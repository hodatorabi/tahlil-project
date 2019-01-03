import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_DARK_BLUE, COLOR_DARK_GRAY} from 'src/assets/styles/colors'


class ProfileRow extends React.Component<Props, void> {

  render() {
    const {customInputContainerStyle, customInputStyle, onChangeText} = this.props
    return (
      <View style={[style.containerStyle, customInputContainerStyle]}
      >
        <View style={style.inputStyle}>
          <Text style={style.textStyle}>{this.props.description}</Text>
          <Text style={style.textStyle}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}

export default ProfileRow

const style = StyleSheet.create({
  containerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: COLOR_DARK_GRAY,
    borderTopWidth: 1,
  },
  inputStyle: {
    height: 50,
    width: 0.95 * SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: COLOR_DARK_BLUE,
    fontSize: 16,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})