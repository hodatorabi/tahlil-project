import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_DARK, COLOR_DARK_BLUE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'


class CustomInput extends React.Component<Props, void> {

  render() {
    const {customInputContainerStyle, customInputStyle, onChangeText} = this.props
    return (
      <View style={[style.containerStyle, customInputContainerStyle]}
      >
        <Label text={this.props.label} textStyle={{textAlign: 'right', fontSize: 16}}
               style={{textAlign: 'right'}}/>
        <TextInput
          {...this.props}
          allowFontScaling={false}
          style={[style.inputStyle, customInputStyle]}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
    )
  }
}

export default CustomInput

const style = StyleSheet.create({
  containerStyle: {
    width: 0.8 * SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomColor: COLOR_DARK,
    borderBottomWidth: 2,
  },
  inputStyle: {
    height: 50,
    width: 0.8 * SCREEN_WIDTH,
    color: COLOR_DARK_BLUE,
    fontSize: 20,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})