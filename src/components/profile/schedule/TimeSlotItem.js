import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'


class TimeSlotItem extends React.Component<Props, State> {

  render() {
    return (
      <View style={{marginHorizontal: 8}}>
        <View style={style.timeSlotContainer}>
          <Label text={this.props.time} textStyle={style.timeTextStyle}/>
          <Label style={{
            marginTop: 10,
          }} text={this.props.isAvailable ? 'آزاد' : (this.props.upcomingProject ? this.props.upcomingProject : '')}/>
        </View>
        <ButtonPlus containerStyle={style.buttonContainerStyle} style={style.buttonStyle}/>
      </View>
    )
  }
}

export default TimeSlotItem

const style = StyleSheet.create({
  timeSlotContainer: {
    width: 0.31 * SCREEN_WIDTH,
    height: 0.18 * SCREEN_HEIGHT,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    elevation: 1,
  },
  timeTextStyle: {
    fontSize: 22, color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold',
  },
  buttonContainerStyle: {
    position: 'absolute',
    bottom: -0.04 * SCREEN_WIDTH,
    left: 0.31 * SCREEN_WIDTH / 2 - 0.05 * SCREEN_WIDTH,
  },
  buttonStyle: {
    width: 0.1 * SCREEN_WIDTH,
    height: 0.1 * SCREEN_WIDTH,
  },
})