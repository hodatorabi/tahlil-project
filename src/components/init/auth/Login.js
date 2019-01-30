import React from 'react'
import HeaderWithLogo from 'src/components/common/HeaderWithLogo'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_ORANGE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomInput from 'src/components/common/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import NavigationService from 'src/utils/navigationService'
import Auth from '../../../store/auth'

class Login extends React.Component<Props, State> {

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
      this.setState({errorMessage: 'نام کاربری یا رمز عبور نمی‌توانند خالی باشند.'})
    } else {
      this.props.login(this.state.username, this.state.password)
        .then(() => {
          NavigationService.reset(['MainTabNavigator'])
          this.props.getProfile()
          this.props.getAbilities()
        })
        .catch((error) => {
          this.setState({errorMessage: 'رمز عبور یا نام کاربری غلط هستند.'})
          this.props.logout()
          console.log('login error', error)
        })
    }
  }

  render() {
    return (
      <View style={style.login}>
        <HeaderWithLogo/>
        <Label text={messages.WELCOME_MESSAGE}
               textStyle={style.welcomeTextStyle}
               style={style.welcomeContainer}/>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0, y: 0}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.loginForm}
        >
          <CustomInput onFocus={() => this.setState({errorMessage: ' '})} autoFocus={true} label={messages.USERNAME}
                       onChangeText={this.onUsernameChange}/>
          <CustomInput onFocus={() => this.setState({errorMessage: ' '})} onChangeText={this.onPasswordChange}
                       customInputContainerStyle={{marginTop: 20}}
                       label={messages.PASSWORD}
                       secureTextEntry/>
          <Label style={{marginTop: 10}} text={this.state.errorMessage}
                 textStyle={{color: COLOR_DEFAULT_ORANGE, fontSize: 16}}/>
          <View style={style.buttonContainer}>
            <CustomButton label={messages.LOGIN} onPress={this.onLogin}/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Join')}>
              <Label textStyle={{fontSize: 16, color: COLOR_BLUE_DEFAULT}} text={messages.NOT_A_MEMBER}/>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(Login)

const style = StyleSheet.create({
  login: {flex: 1, justifyContent: 'flex-start', alignItems: 'center'},
  welcomeTextStyle: {
    color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold', fontSize: 24,
  },
  welcomeContainer: {
    marginTop: 0.03 * SCREEN_HEIGHT,
    marginBottom: 0.1 * SCREEN_HEIGHT,
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: SCREEN_HEIGHT * 0.05,
    width: 0.8 * SCREEN_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})