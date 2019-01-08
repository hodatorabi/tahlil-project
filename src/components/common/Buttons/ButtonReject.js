import React from 'react'
import {ICON_REJECT} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'
import {COLOR_RED, COLOR_RED_TRANSPARENT} from 'src/assets/styles/colors'


class ButtonReject extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity style={[{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_RED_TRANSPARENT,
        width: 38,
        height: 38,
        borderRadius: 19,
      }, this.props.style]}
                        onPress={this.props.onPress}>
        <Image source={ICON_REJECT} tintColor={COLOR_RED}
               style={{width: 20, height: 20}}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonReject
