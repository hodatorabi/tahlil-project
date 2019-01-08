import React from 'react'
import {ICON_ACCEPT} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'


class ButtonAccept extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Image source={ICON_ACCEPT} tintColor={COLOR_BLUE_DEFAULT}
               style={{width: 35, height: 35}}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonAccept
