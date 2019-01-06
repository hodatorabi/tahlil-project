import React from 'react'
import {ICON_MINUS} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'


class ButtonMinus extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={ICON_MINUS} style={{width: 25, height: 25}}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonMinus
