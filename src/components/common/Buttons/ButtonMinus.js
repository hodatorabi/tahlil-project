import React from 'react'
import {ICON_MINUS} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'
import {COLOR_MEDIUM_BLUE} from 'src/assets/styles/colors'


class ButtonMinus extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={ICON_MINUS} style={{width: 20, height: 20}} tintColor={COLOR_MEDIUM_BLUE}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonMinus
