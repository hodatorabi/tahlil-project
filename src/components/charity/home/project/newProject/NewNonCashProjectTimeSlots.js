import React from 'react'
import {Picker, ScrollView, StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {toTime, toWeekDay} from 'src/utils/farsiUtils'
import {COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import Projects from 'src/store/projects'
import {messages} from 'src/utils/messages'
import CommonHeader from 'src/components/common/CommonHeader'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import AbilityRow from 'src/components/profile/profileRow/AbilityRow'
import CustomButton from 'src/components/common/Buttons/CustomButton'

const weekDay = [5, 6, 0, 1, 2, 3, 4]
const time = [0, 1, 2, 3]

class NewNonCashProjectTimeSlots extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onAddTimeSlot = this.onAddTimeSlot.bind(this)
    this.onRemoveTimeSlot = this.onRemoveTimeSlot.bind(this)
  }

  state = {
    selectedDay: 5,
    selectedTime: 0,
    selectedSlots: [],
  }

  onAddTimeSlot() {
    let element = {weekday: this.state.selectedDay, time: this.state.selectedTime}
    this.setState({selectedSlots: [...this.state.selectedSlots, element]})
  }

  onRemoveTimeSlot(index) {
    let arr = this.state.selectedSlots
    arr.splice(index, 1)
    this.setState({selectedSlots: arr})
  }

  onSubmit(id) {
    for (let i = 0; i < this.state.selectedSlots.length; i++) {
      let selectedSlot = this.state.selectedSlots[i]
      this.props.createProjectTimeSlot(selectedSlot, id)
    }
    this.props.getCharityNonCashProjects()
      .then(() => this.props.navigation.goBack('CreateNonCash'))
  }


  render() {
    let projectId = this.props.navigation.getParam('projectId', null)
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.PROJECT_TIMETABLE} hasBack={false}/>
        <ScrollView contentContainerStyle={{
          paddingTop: 0.02 * SCREEN_HEIGHT,
          alignItems: 'center',
        }}>
          <View style={style.itemContainerStyle}>
            <Label text={'لطفا زمان‌هایی که نیاز به نیرو دارید را مشخص کنید.'} textStyle={{textAlign: 'right'}}
                   style={{
                     paddingHorizontal: 40,
                     backgroundColor: COLOR_WHITE,
                     width: SCREEN_WIDTH,
                     paddingBottom: 15,
                   }}/>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
              <ButtonPlus
                onPress={this.onAddTimeSlot}/>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedTime}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedTime: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                {time.map((item, index) => (
                  <Picker.Item label={toTime(item)} value={item}/>
                ))}
              </Picker>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedDay}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedDay: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                {weekDay.map((item, index) => (
                  <Picker.Item label={toWeekDay(item)} value={item}/>
                ))}
              </Picker>
            </View>
            {this.state.selectedSlots.map((item, index) => (
              <AbilityRow onPress={() => this.onRemoveTimeSlot(index)} style={{width: 0.9 * SCREEN_WIDTH}}
                          title={toWeekDay(item.weekday) + ' ' + toTime(item.time)}/>
            ))}
          </View>
          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50}}
                        label={messages.CONTINUE}
                        labelStyle={{fontSize: 20}}
                        onPress={() => this.onSubmit(projectId)}/>
        </ScrollView>
      </View>
    )
  }
}

export default Projects.providers.projects(NewNonCashProjectTimeSlots)

const style = StyleSheet.create({
  itemContainerStyle: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.95,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLOR_WHITE,
    elevation: 1,
  },
  itemTextStyle: {
    width: 250,
    fontSize: 16,
    borderBottomWidth: 1,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})