import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import {COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import TimeSlotItem from 'src/components/profile/schedule/TimeSlotItem'
import Label from 'src/components/common/Label'


class DayItem extends React.Component<Props, State> {

  render() {
    return (
      <View style={style.container}>
        <Label text={this.props.weekDay} style={style.textContainerStyle}
               textStyle={style.textStyle}/>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={style.scrollStyle} horizontal={true}>
          <TimeSlotItem time={'صبح'}/>
          <TimeSlotItem time={'ظهر'}/>
          <TimeSlotItem time={'عصر'}/>
          <TimeSlotItem time={'شب'}/>
        </ScrollView>
      </View>
    )
  }
}

export default DayItem

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    height: 0.33 * SCREEN_HEIGHT,
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: 30,
    color: COLOR_DARK_BLUE,
    fontFamily: 'IRANSansMobile_Bold',
  },
  textContainerStyle: {
    alignSelf: 'flex-end', marginRight: 30,
  },
  scrollStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
})