import React from 'react'
import {StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_BLUE_DEFAULT, COLOR_BLUE_TRANSPARENT, COLOR_RED, COLOR_RED_TRANSPARENT,} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'


class ProjectTypeTag extends React.Component<Props, void> {

  renderColor = () => {
    switch (this.props.type) {
      case messages.CASH:
        return COLOR_RED
      case messages.NON_CASH:
        return COLOR_BLUE_DEFAULT
    }
  }

  renderBackgroundColor = () => {
    switch (this.props.type) {
      case messages.CASH:
        return COLOR_RED_TRANSPARENT
      case messages.NON_CASH:
        return COLOR_BLUE_TRANSPARENT
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
               text={this.props.type}/>
      </View>
    )
  }
}

export default ProjectTypeTag

const styles = StyleSheet.create({
  statusContainer: {
    height: 35,
    borderRadius: 17.5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})