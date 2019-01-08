import React from 'react'
import {StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_DEFAULT_ORANGE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import CustomInput from 'src/components/common/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import AgreementCheckBox from 'src/components/common/AgreementCheckBox'

class CharityJoinForm extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPass: '',
      charityName: '',
      errorMessage: ' ',
      checked: false,
    }

    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this)
    this.onCharityNameChange = this.onCharityNameChange.bind(this)
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
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

  onCharityNameChange(value) {
    this.setState({charityName: value})
  }

  onCheckBoxChange() {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }))
  }

  onLogin() {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      this.setState({errorMessage: 'لطفا همه فیلدها را پر کنید'})
    } else if (this.state.password !== this.state.confirmPass) {
      this.setState({errorMessage: 'تکرار رمز مطابقت ندارد'})
    } else if (this.state.checked === false) {
      this.setState({errorMessage: 'برای عضویت در سامانه باید با قوانین موافقت کرده باشید'})
    }
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
                       onChangeText={this.onCharityNameChange}
                       customInputContainerStyle={{marginTop: 25}}
                       label={messages.CHARITY_NAME}/>

          <Label style={{marginTop: 10, marginBottom: 0.03 * SCREEN_HEIGHT}} text={this.state.errorMessage}
                 textStyle={{color: COLOR_DEFAULT_ORANGE, fontSize: 16}}/>

          <AgreementCheckBox style={{marginBottom: 0.06 * SCREEN_HEIGHT}} checked={this.state.checked}
                             onValueChange={this.onCheckBoxChange}/>

          <CustomButton label={messages.SIGN_UP} onPress={this.onLogin}/>

        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default CharityJoinForm

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
  },
})