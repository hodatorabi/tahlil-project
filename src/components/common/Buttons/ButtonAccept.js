import React from 'react'
import {ICON_ACCEPT} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'
import {COLOR_BLUE_DEFAULT, COLOR_BLUE_TRANSPARENT} from 'src/assets/styles/colors'


class ButtonAccept extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity
        style={[{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR_BLUE_TRANSPARENT,
          width: 38,
          height: 38,
          borderRadius: 19,
        }, this.props.style]}
        onPress={this.props.onPress}>
        <Image source={ICON_ACCEPT} tintColor={COLOR_BLUE_DEFAULT}
               style={{width: 22, height: 22}}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonAccept
