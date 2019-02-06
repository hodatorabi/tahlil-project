import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import {ICON_STAR} from 'src/assets/styles/icons'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'


class RateItemButton extends React.Component<Props, State> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}
                        style={[style.containerStyle, this.props.style, {backgroundColor: this.props.backgroundColor}]}>
        <Image source={ICON_STAR} style={{width: 15, height: 15, marginRight: 5}} tintColor={this.props.fontColor}/>
        <Label text={this.props.rating} textStyle={{fontSize: 16, color: this.props.fontColor}}/>
      </TouchableOpacity>
    )
  }
}

export default RateItemButton

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderColor: COLOR_BLUE_DEFAULT,
    borderWidth: 1
  },
})