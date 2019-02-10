import React from 'react'
import {ScrollView, StyleSheet, TextInput, ToastAndroid, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {ICON_CALENDAR} from 'src/assets/styles/icons'
import Label from 'src/components/common/Label'
import DatePicker from 'react-native-datepicker'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import {COLOR_WHITE} from 'src/assets/styles/colors'
import Projects from 'src/store/projects'


class NewCashProject extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onAmountChange = this.onAmountChange.bind(this)
    this.onDescChange = this.onDescChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  state = {
    name: '',
    description: '',
    date: new Date(),
    startDate: null,
    targetAmount: 0,
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

  onChangeName(text) {
    this.setState({name: text})
  }

  onDescChange(text) {
    this.setState({description: text})
  }

  onAmountChange(text) {
    this.setState({targetAmount: text})
  }

  onSubmit() {
    this.props.createCashProject(this.state.startDate, this.state.date, this.state.name, this.state.description, this.state.targetAmount)
      .then((res) => {
        this.props.getCharityCashProjects()
        this.props.navigation.goBack()
      })
      .catch((error) => {
        console.log(error)
        ToastAndroid.show('امکان ثبت این پروژه نیست.', ToastAndroid.SHORT)
      })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <CommonHeader title={messages.CREATE_CASH} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>

          <View style={[style.itemContainerStyle]}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_NAME}/>
            <TextInput style={style.itemTextStyle} maxLength={30} onChangeText={(text) => this.onChangeName(text)}
            />
          </View>

          <View style={[style.itemContainerStyle]}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.NEEDED_AMOUNT}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label style={{alignSelf: 'flex-end'}} text={' تومان'}/>
              <TextInput style={[style.itemTextStyle, {width: 150, fontSize: 18}]}
                         maxLength={8}
                         onChangeText={(text) => this.onAmountChange(text)}/>
            </View>
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

export default Projects.providers.projects(NewCashProject)

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