import React from 'react'
import {StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_DEFAULT_ORANGE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import CustomInput from 'src/components/common/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from 'src/components/common/CustomButton'

class VolunteerJoinForm extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errorMessage: ' ',
    }

    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  onUsernameChange(value) {
    this.setState({username: value})
  }

  onPasswordChange(value) {
    this.setState({password: value})
  }

  onLogin() {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      this.setState({errorMessage: 'نام کاربری یا رمز عبور نمی‌توانند خالی باشند'})
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
                       customInputContainerStyle={{marginTop: 20}}
                       label={messages.PASSWORD}/>

          <CustomInput onFocus={() => this.setState({errorMessage: ' '})}
                       onChangeText={this.onConfirmPasswordChange}
                       customInputContainerStyle={{marginTop: 20}}
                       label={messages.CONFIRM_PASS}/>

          <Label style={{marginTop: 10, marginBottom: 0.02 * SCREEN_HEIGHT}} text={this.state.errorMessage}
                 textStyle={{color: COLOR_DEFAULT_ORANGE, fontSize: 16}}/>

          <CustomButton label={messages.SIGN_UP} onPress={this.onLogin}/>

        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default VolunteerJoinForm

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