import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_WHITE} from 'src/assets/styles/colors'
import DayItem from 'src/components/profile/schedule/DayItem'


class ScheduleEdit extends React.Component<Props, State> {

  state = {
    addAbilityPopUpVisible: false,
    removeAbilityPopUpVisible: false,
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <DayItem/>
      </View>
    )
  }
}

export default ScheduleEdit

const style = StyleSheet.create({
  timeSlotContainer: {
    width: 0.31 * SCREEN_WIDTH,
    height: 0.2 * SCREEN_HEIGHT,
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 20,
    marginLeft: 20,
    elevation: 1,
  },
  timeTextStyle: {
    fontSize: 16, color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold',
  },
})