import React from 'react'
import {ICON_PLUS} from 'src/assets/styles/icons'
import {Image, TouchableOpacity} from 'react-native'


class ButtonPlus extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={ICON_PLUS} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
    )
  }
}

export default ButtonPlus
