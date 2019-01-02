import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DARK, COLOR_DARK_BLUE} from 'src/assets/styles/colors'


class CustomInput extends React.Component<Props, void> {

  render() {
    const {customInputContainerStyle, customInputStyle, onChangeText} = this.props
    return (
      <View style={[style.containerStyle, customInputContainerStyle]}
      >
        <TextInput
          {...this.props}
          allowFontScaling={false}
          style={[style.inputStyle, customInputStyle]}
          onChangeText={(text) => onChangeText(text)}
          placeholder={this.props.label}
        />
      </View>
    )
  }
}

export default CustomInput

const style = StyleSheet.create({
  containerStyle: {
    width: 0.75 * SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLOR_DARK,
    borderBottomWidth: 2,
  },
  inputStyle: {
    height: 50,
    width: 0.65 * SCREEN_WIDTH,
    color: COLOR_DARK_BLUE,
    fontSize: 18,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})