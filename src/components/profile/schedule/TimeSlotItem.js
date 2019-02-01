import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import {toTime} from 'src/utils/farsiUtils'
import ButtonAccept from 'src/components/common/Buttons/ButtonAccept'


class TimeSlotItem extends React.Component<Props, State> {

  render() {
    return (
      <View style={{marginHorizontal: 8}}>
        <View style={style.timeSlotContainer}>
          <Label text={toTime(this.props.slot.time)} textStyle={style.timeTextStyle}/>
          <Label style={{
            marginTop: 10,
          }}
                 text={this.props.slot.isAvailable ? 'آزاد' : (this.props.slot.upcomingProject ? this.props.slot.upcomingProject : '')}/>
        </View>
        {this.props.slot.isAvailable ? <ButtonAccept style={style.buttonContainerStyle}/> :
          <ButtonPlus onPress={this.props.onAddPress}
                      containerStyle={style.buttonContainerStyle} style={style.buttonStyle}/>}
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