import React from 'react'
import {TouchableOpacity, View} from 'react-native'


class AvailabilityButton extends React.Component<Props, void> {

  render() {
    return (
      <TouchableOpacity style={{
        width: 20,
        height: 20,
        borderColor: this.props.color,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }} onPress={this.props.onPress}>
        <View style={{
          width: 14,
          height: 14,
          borderRadius: 7,
          backgroundColor: this.props.color,
        }}/>
      </TouchableOpacity>
    )
  }
}

export default AvailabilityButton
