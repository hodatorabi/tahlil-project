import React from 'react'
import {Picker, ScrollView, StyleSheet, TextInput, View} from 'react-native'
import {messages} from 'src/utils/messages'
import CommonHeader from 'src/components/common/CommonHeader'
import Label from 'src/components/common/Label'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import {COLOR_WHITE} from 'src/assets/styles/colors'
import Auth from 'src/store/auth'
import {toArray} from 'src/utils/dictionary'
import {toTime, toWeekDay} from 'src/utils/farsiUtils'

const weekDay = [5, 6, 0, 1, 2, 3, 4]
const time = [0, 1, 2, 3]

class NonCashFilterPage extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.genderUtil = this.genderUtil.bind(this)
    this.onMinAgeChange = this.onMinAgeChange.bind(this)
    this.onMaxAgeChange = this.onMaxAgeChange.bind(this)
    this.onLocationChange = this.onLocationChange.bind(this)
    this.onSubmitFilters = this.onSubmitFilters.bind(this)
  }

  state = {
    selectedGender: 0,
    minAge: null,
    maxAge: null,
    needMale: true,
    needFemale: true,
    city: null,
    selectedAbility: -1,
    selectedDay: -1,
    selectedTime: -1,
    filters: {},
  }

  genderUtil() {
    if (this.state.selectedGender === 0) {
      this.setState({needFemale: true, needMale: true})
    } else if (this.state.selectedGender === 1) {
      this.setState({needFemale: true, needMale: false})
    } else if (this.state.selectedGender === 2) {
      this.setState({needFemale: false, needMale: true})
    }
  }

  onMinAgeChange(text) {
    this.setState({minAge: text})
  }

  onMaxAgeChange(text) {
    this.setState({maxAge: text})
  }

  onLocationChange(text) {
    this.setState({city: text})
  }

  onSubmitFilters() {
    let weekday = this.state.selectedDay === -1 ? null : this.state.selectedDay
    let time = this.state.selectedTime === -1 ? null : this.state.selectedTime
    let ability = this.state.selectedAbility === -1 ? null : this.state.selectedAbility
    let needMale = this.state.needMale === true ? 1 : 0
    let needFemale = this.state.needFemale === true ? 1 : 0
    const filters = {
      minAge: this.state.minAge,
      maxAge: this.state.maxAge,
      needMale: needMale,
      needFemale: needFemale,
      city: this.state.city,
      ability: ability,
      weekday: weekday,
      time: time,
    }
    const {routeName, key} = this.props.navigation.getParam('returnToRoute')
    this.setState({filters: filters}, () => this.props.navigation.navigate({
      routeName,
      key,
      params: {filters: this.state.filters},
    }))
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.ADD_FILTER} hasBack={true}
                      onPress={() => {
                        const {routeName, key} = this.props.navigation.getParam('returnToRoute')
                        this.props.navigation.navigate({routeName, key, params: {filters: this.state.filters}})
                      }}/>

        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.VOLUNTEER_GENDER}/>
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.selectedGender}
              style={{height: 50, width: 250}}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedGender: itemValue}, this.genderUtil)}
              itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
              <Picker.Item label=' هر دو' value={0}/>
              <Picker.Item label=' زن' value={1}/>
              <Picker.Item label=' مرد' value={2}/>
            </Picker>
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.VOLUNTEER_AGE}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput keyboardType={'number-pad'} style={[style.itemTextStyle, {width: 40}]}
                         onChangeText={(text) => this.onMaxAgeChange(text)}/>
              <Label text={' تا '}/>
              <TextInput keyboardType={'number-pad'} style={[style.itemTextStyle, {width: 40}]}
                         onChangeText={(text) => this.onMinAgeChange(text)}/>
              <Label text={'از '}/>
            </View>
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_LOCATION}/>
            <TextInput style={style.itemTextStyle} onChangeText={(text) => this.onLocationChange(text)}/>
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.VOLUNTEER_ABILITIES}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedAbility}
                style={{height: 50, width: 250}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedAbility: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                <Picker.Item label={' همه'} value={-1}/>
                {toArray(this.props.abilities).map((item, index) => (
                  <Picker.Item label={' ' + item[1]['name']} value={item[0]}/>
                ))}
              </Picker>
            </View>
          </View>

          <View style={style.itemContainerStyle}>
            <Label text={'زمان‌ مورد نیاز پروژه:'} textStyle={{fontSize: 16}}
                   style={{alignSelf: 'flex-end', marginBottom: 5}}/>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedTime}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedTime: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                <Picker.Item label={' همه'} value={-1}/>
                {time.map((item, index) => (
                  <Picker.Item label={toTime(item)} value={item}/>
                ))}
              </Picker>

              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedDay}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedDay: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                <Picker.Item label={' همه'} value={-1}/>
                {weekDay.map((item, index) => (
                  <Picker.Item label={toWeekDay(item)} value={item}/>
                ))}
              </Picker>
            </View>

          </View>

          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50}}
                        label={messages.ADD_FILTER}
                        labelStyle={{fontSize: 20}}
                        onPress={this.onSubmitFilters}
          />

        </ScrollView>

      </View>
    )
  }
}

export default Auth.providers.auth(NonCashFilterPage)

const style = StyleSheet.create({
  itemContainerStyle: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 40,
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