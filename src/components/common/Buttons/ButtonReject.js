import React from 'react'
import {ICON_REJECT} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'
import {COLOR_RED} from 'src/assets/styles/colors'


class ButtonReject extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Image source={ICON_REJECT} tintColor={COLOR_RED}
               style={{width: 35, height: 35}}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonReject
