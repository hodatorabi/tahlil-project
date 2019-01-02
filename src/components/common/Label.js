import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {COLOR_DARK_BLUE} from 'src/assets/styles/colors'


class Label extends React.PureComponent<Props> {

  render() {
    return (
      <View style={[style.labelContainer, this.props.style]}>
        <Text style={[style.labelTextStyle, this.props.textStyle]}>{this.props.text}</Text>
      </View>
    )
  }
}

export default Label


const style = StyleSheet.create({
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelTextStyle: {
    fontSize: 18,
    color: COLOR_DARK_BLUE,
    textAlign: 'center',
    fontFamily: 'IRANSansMobile',
  },

})