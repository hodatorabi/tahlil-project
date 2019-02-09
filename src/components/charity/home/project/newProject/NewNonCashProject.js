import React from 'react'
import {Picker, ScrollView, StyleSheet, TextInput, ToastAndroid, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import {toArray} from 'src/utils/dictionary'
import Auth from 'src/store/auth'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import AbilityRow from 'src/components/profile/profileRow/AbilityRow'
import {abilityIDToName} from 'src/utils/farsiUtils'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import DatePicker from 'react-native-datepicker'
import {ICON_CALENDAR} from 'src/assets/styles/icons'
import Projects from 'src/store/projects'


class NewNonCashProject extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onAddAbility = this.onAddAbility.bind(this)
    this.onRemoveAbility = this.onRemoveAbility.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.genderUtil = this.genderUtil.bind(this)
    this.onMinAgeChange = this.onMinAgeChange.bind(this)
    this.onMaxAgeChange = this.onMaxAgeChange.bind(this)
    this.onDescChange = this.onDescChange.bind(this)
    this.onLocationChange = this.onLocationChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  state = {
    name: '',
    selectedGender: 0,
    minAge: null,
    maxAge: null,
    needMale: false,
    needFemale: false,
    city: '',
    description: '',
    selectedAbility: 1,
    selectedAbilities: [],
    date: new Date(),
    startDate: null,
  }

  componentDidMount() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!
    let yyyy = today.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd
    this.setState({startDate: today})
  }

  onAddAbility() {
    this.setState({selectedAbilities: [...this.state.selectedAbilities, this.state.selectedAbility]})
  }

  onRemoveAbility(id) {
    let arr = this.state.selectedAbilities
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === id) {
        arr.splice(i, 1)
        break
      }
    }
    this.setState({selectedAbilities: arr})
  }

  onChangeName(text) {
    this.setState({name: text})
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

  onDescChange(text) {
    this.setState({description: text})
  }

  onSubmit() {
    this.props.createNonCashProject(this.state.startDate, this.state.date, this.state.name, this.state.description, this.state.needMale, this.state.needFemale, this.state.minAge, this.state.maxAge, this.state.city, this.state.selectedAbilities)
      .then((res) => {
        this.props.navigation.navigate('')
      })
      .catch((error) => {
        console.log(error)
        ToastAndroid.show('امکان ثبت این پروژه نیست.', ToastAndroid.SHORT)
      })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <CommonHeader title={messages.CREATE_NON_CASH} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>

          <View style={[style.itemContainerStyle]}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_NAME}/>
            <TextInput style={style.itemTextStyle} maxLength={30} onChangeText={(text) => this.onChangeName(text)}
            />
          </View>

          <View style={[style.itemContainerStyle]}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 10}}
                   text={messages.PROJECT_END}/>
            <DatePicker
              style={{width: 250}}
              date={this.state.date}
              mode="date"
              placeholder="انتخاب کنید"
              androidMode={'spinner'}
              format="YYYY-MM-DD"
              minDate={this.state.startDate}
              maxDate="2020-06-01"
              confirmBtnText={'تایید'}
              cancelBtnText="انصراف"
              iconSource={ICON_CALENDAR}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  fontFamily: 'IRANSansMobile',
                },
              }}
              onDateChange={(date) => {
                this.setState({date: date})
              }}
            />
          </View>

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
              <TextInput style={[style.itemTextStyle, {width: 40}]} onChangeText={(text) => this.onMaxAgeChange(text)}/>
              <Label text={' تا '}/>
              <TextInput style={[style.itemTextStyle, {width: 40}]} onChangeText={(text) => this.onMinAgeChange(text)}/>
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
              <ButtonPlus
                onPress={this.onAddAbility}/>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedAbility}
                style={{height: 50, width: 250}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedAbility: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                {toArray(this.props.abilities).map((item, index) => (
                  <Picker.Item label={' ' + item[1]['name']} value={item[0]}/>
                ))}
              </Picker>
            </View>
            {this.state.selectedAbilities.map((item, index) => (
              <AbilityRow onPress={() => this.onRemoveAbility(item)} style={{width: 0.9 * SCREEN_WIDTH}}
                          title={abilityIDToName(item, this.props.abilities)}/>
            ))}
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_DESCRIPTION}/>
            <TextInput style={style.itemTextStyle} multiline={true} onChangeText={(text) => this.onDescChange(text)}/>
          </View>

          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50}}
                        label={messages.CONTINUE}
                        labelStyle={{fontSize: 20}}
                        onPress={this.onSubmit}/>
        </ScrollView>
      </View>

    )
  }
}

export default Projects.providers.projects(Auth.providers.auth(NewNonCashProject))

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