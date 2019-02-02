import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_DARK_BLUE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import ButtonMinus from 'src/components/common/Buttons/ButtonMinus'


class AbilityRow extends React.Component<Props, void> {

  render() {
    return (
      <View style={[style.containerStyle]}
      >
        {this.props.noButton ? <View/> : <ButtonMinus onPress={this.props.onPress}/>}
        <Label textStyle={style.textStyle} text={this.props.title}/>
      </View>
    )
  }
}

export default AbilityRow

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
  },
  inputStyle: {
    height: 50,
    width: 0.95 * SCREEN_WIDTH,
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