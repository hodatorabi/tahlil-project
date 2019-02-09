import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {
  COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_BLUE_TRANSPARENT, COLOR_DARK, COLOR_DEFAULT_ORANGE, COLOR_MEDIUM_BLUE,
  COLOR_ORANGE_TRANSPARENT, COLOR_WHITE,
} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {toTime} from 'src/utils/farsiUtils'
import AvailabilityButton from 'src/components/common/Buttons/AvailabilityButton'


class TimeSlotItem extends React.Component<Props, State> {

  render() {
    return (
      <View style={{marginHorizontal: 8}}>
        <View style={[style.timeSlotContainer, {
          backgroundColor: this.props.slot.isAvailable ? (this.props.slot.upcomingProject == null ? COLOR_BLUE_TRANSPARENT : COLOR_ORANGE_TRANSPARENT) : COLOR_WHITE,
          borderColor: this.props.slot.isAvailable ? (this.props.slot.upcomingProject == null ? COLOR_BLUE_DEFAULT : COLOR_DEFAULT_ORANGE) : COLOR_MEDIUM_BLUE,
        }]}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '85%',
          }}>
            <AvailabilityButton
              onPress={this.props.slot.isAvailable ? (this.props.slot.upcomingProject == null ? this.props.onRemovePress : null) : this.props.onAddPress}
              color={this.props.slot.isAvailable ? (this.props.slot.upcomingProject == null ? COLOR_BLUE_DEFAULT : COLOR_DEFAULT_ORANGE) : COLOR_MEDIUM_BLUE}/>

            <Label text={toTime(this.props.slot.time)}
                   textStyle={[style.timeTextStyle, {color: this.props.slot.isAvailable ? (this.props.slot.upcomingProject == null ? COLOR_BLUE_DEFAULT : COLOR_DEFAULT_ORANGE) : COLOR_MEDIUM_BLUE,}]}/>
          </View>
          <Label style={{marginTop: 10,}}
                 textStyle={{fontSize: 12, color: COLOR_DARK, fontFamily: 'IRANSansMobile_Bold'}}
                 text={!this.props.slot.isAvailable ? '' : (this.props.slot.upcomingProject ? this.props.slot.upcomingProject.name : '')}/>
        </View>
      </View>
    )
  }
}

export default TimeSlotItem

const style = StyleSheet.create({
  timeSlotContainer: {
    width: 0.31 * SCREEN_WIDTH,
    height: 0.12 * SCREEN_HEIGHT,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    borderWidth: 1,
  },
  timeTextStyle: {
    fontSize: 18, color: COLOR_BLACK, fontFamily: 'IRANSansMobile_Bold',
    textAlign: 'right',
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