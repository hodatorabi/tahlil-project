import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import Auth from 'src/store/auth'
import Label from 'src/components/common/Label'
import TimeSlotItem from 'src/components/profile/schedule/TimeSlotItem'
import {toWeekDay} from 'src/utils/farsiUtils'
import {COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'

const weekDay = [5, 6, 0, 1, 2, 3, 4]

class Schedule extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onAddSlot = this.onAddSlot.bind(this)
    this.onRemoveSlot = this.onRemoveSlot.bind(this)
  }

  onAddSlot = (id) => {
    this.props.addAvailableSlot(id)
      .then(() => {
        this.props.getVolunteerTimeSlots()
      })
  }

  onRemoveSlot = (id) => {
    this.props.removeAvailableSlot(id)
      .then(() => {
        this.props.getVolunteerTimeSlots()
      })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {weekDay.map((item, index) => (
            <View style={style.container}>
              <Label text={toWeekDay(item)} style={style.textContainerStyle}
                     textStyle={style.textStyle}/>
              <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={style.scrollStyle}
                          horizontal={true}>
                <TimeSlotItem onAddPress={() => this.onAddSlot(this.props.volunteerTimeSlots[4 * index]['id'])}
                              onRemovePress={() => this.onRemoveSlot(this.props.volunteerTimeSlots[4 * index]['id'])}
                              slot={this.props.volunteerTimeSlots[4 * index]}/>
                <TimeSlotItem onAddPress={() => this.onAddSlot(this.props.volunteerTimeSlots[4 * index + 1]['id'])}
                              onRemovePress={() => this.onRemoveSlot(this.props.volunteerTimeSlots[4 * index + 1]['id'])}
                              slot={this.props.volunteerTimeSlots[4 * index + 1]}/>
                <TimeSlotItem onAddPress={() => this.onAddSlot(this.props.volunteerTimeSlots[4 * index + 2]['id'])}
                              onRemovePress={() => this.onRemoveSlot(this.props.volunteerTimeSlots[4 * index + 2]['id'])}
                              slot={this.props.volunteerTimeSlots[4 * index + 2]}/>
                <TimeSlotItem onAddPress={() => this.onAddSlot(this.props.volunteerTimeSlots[4 * index + 3]['id'])}
                              onRemovePress={() => this.onRemoveSlot(this.props.volunteerTimeSlots[4 * index + 3]['id'])}
                              slot={this.props.volunteerTimeSlots[4 * index + 3]}/>
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(Schedule)

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