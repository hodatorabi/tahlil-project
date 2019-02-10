import React from 'react'
import {StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {
  COLOR_BLUE_DEFAULT, COLOR_BLUE_TRANSPARENT, COLOR_DEFAULT_ORANGE, COLOR_ORANGE_TRANSPARENT, COLOR_RED,
  COLOR_RED_TRANSPARENT,
} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'


class RequestStatus extends React.Component<Props, void> {

  renderColor = () => {
    switch (this.props.status) {
      case messages.REJECTED:
        return COLOR_RED
      case messages.ACCEPTED:
        return COLOR_BLUE_DEFAULT
      case messages.PENDING:
        return COLOR_DEFAULT_ORANGE
    }
  }

  renderBackgroundColor = () => {
    switch (this.props.status) {
      case messages.REJECTED:
        return COLOR_RED_TRANSPARENT
      case messages.ACCEPTED:
        return COLOR_BLUE_TRANSPARENT
      case messages.PENDING:
        return COLOR_ORANGE_TRANSPARENT
    }
  }

  render() {
    return (
      <View style={[styles.statusContainer, {
        backgroundColor: this.renderBackgroundColor(),
      }]}>
        <Label textStyle={{
          color: this.renderColor(),
          fontSize: 18,
          fontFamily: 'IRANSansMobile_Bold',
        }}
               text={this.props.status}/>
      </View>
    )
  }
}

export default RequestStatus

const styles = StyleSheet.create({
  statusContainer: {
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})