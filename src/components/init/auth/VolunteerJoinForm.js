import React from 'react'
import {Picker, StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_DEFAULT_ORANGE, COLOR_MEDIUM_BLUE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomInput from 'src/components/common/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import AgreementCheckBox from 'src/components/common/AgreementCheckBox'
import Auth from '../../../store/auth'
import NavigationService from '../../../utils/navigationService'

class VolunteerJoinForm extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPass: '',
      errorMessage: ' ',
      checked: false,
      name: '',
      gender: 'f',
      age: null,
      phoneNumber: '',
      city: ''
    }

    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this)
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onAgeChange = this.onAgeChange.bind(this)
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
    this.onJoin = this.onJoin.bind(this)
  }

  onUsernameChange(value) {
    this.setState({username: value})
  }

  onPasswordChange(value) {
    this.setState({password: value})
  }

  onConfirmPasswordChange(value) {
    this.setState({confirmPass: value})
  }

  onNameChange(value) {
    this.setState({name: value})
  }

  onAgeChange(value) {
    this.setState({age: value})
  }

  onPhoneNumberChange(value) {
    this.setState({phoneNumber: value})
  }

  onCityChange(value) {
    this.setState({city: value})
  }

  onJoin() {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      this.setState({errorMessage: 'نام کاربری یا رمز عبور نمی‌توانند خالی باشند'})
    } else if (this.state.password !== this.state.confirmPass) {
      this.setState({errorMessage: 'تکرار رمز مطابقت ندارد'})
    } else if (this.state.checked === false) {
      this.setState({errorMessage: 'برای عضویت در سامانه باید با قوانین موافقت کرده باشید'})
    } else {
      this.props.volunteerJoin(this.state.username, this.state.password, this.state.name, this.state.gender, this.state.age, this.state.phoneNumber, this.state.city)
        .then((response) => {
          this.props.login(this.state.username, this.state.password)
            .then(() => {
              this.props.getProfile()
              this.props.getAbilities()
              NavigationService.reset(['MainTabNavigator'])
            })
            .catch((error) => {
              console.log(error)
            })

        })
        .catch((error) => {
          console.log('join error', error)
        })
    }
  }

  onCheckBoxChange() {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }))
  }

  render() {
    return (
      <View style={style.login}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0, y: 0}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.loginForm}
        >
          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       label={messages.USERNAME}
                       onChangeText={this.onUsernameChange}/>

          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onPasswordChange}
                       customInputContainerStyle={{marginTop: 25}}
                       secureTextEntry
                       label={messages.PASSWORD}/>

          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onConfirmPasswordChange}
                       customInputContainerStyle={{marginTop: 25}}
                       secureTextEntry
                       label={messages.CONFIRM_PASS}/>
          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onNameChange}
                       customInputContainerStyle={{marginTop: 25}}
                       label={messages.NAME}/>

          <View style={{
            width: .85 * SCREEN_WIDTH,
            borderBottomColor: COLOR_MEDIUM_BLUE,
            borderBottomWidth: 2,
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 0.027 * SCREEN_WIDTH
          }}>
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.gender}
              style={{
                width: 100,
              }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({gender: itemValue})
              }}
              itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
              <Picker.Item label={messages.WOMAN} value={'f'}/>
              <Picker.Item label={messages.MAN} value={'m'}/>
            </Picker>
            <Label text={messages.GENDER} textStyle={{
              color: COLOR_MEDIUM_BLUE,
              fontSize: 18,
              fontFamily: 'IRANSansMobile',
              textAlign: 'right',
            }}/>
          </View>

          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onAgeChange}
                       customInputContainerStyle={{marginTop: 25}}
                       label={messages.AGE_T}/>

          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onPhoneNumberChange}
                       customInputContainerStyle={{marginTop: 25}}
                       label={messages.PHONE_NUMBER_T}/>

          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onCityChange}
                       customInputContainerStyle={{marginTop: 25}}
                       label={messages.CITY_T}/>

          <Label style={{marginTop: 10, marginBottom: 0.03 * SCREEN_HEIGHT}} text={this.state.errorMessage}
                 textStyle={{color: COLOR_DEFAULT_ORANGE, fontSize: 16}}/>

          <AgreementCheckBox style={{marginBottom: 0.06 * SCREEN_HEIGHT}} checked={this.state.checked}
                             onValueChange={this.onCheckBoxChange}/>

          <CustomButton label={messages.SIGN_UP} onPress={this.onJoin}/>

        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(VolunteerJoinForm)

const style = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0.05 * SCREEN_HEIGHT,
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
})