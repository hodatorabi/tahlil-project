import React from 'react'
import HeaderWithLogo from 'src/components/common/HeaderWithLogo'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomInput from 'src/components/common/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomButton from 'src/components/common/CustomButton'

class Login extends React.Component<Props, State> {

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
          <CustomInput autoFocus={true} label={messages.USERNAME}/>
          <CustomInput customInputContainerStyle={{marginTop: 20}} label={messages.PASSWORD}/>
          <View style={style.buttonContainer}>
            <CustomButton label={messages.LOGIN}/>
            <TouchableOpacity>
              <Label textStyle={{fontSize: 16, color: COLOR_BLUE_DEFAULT}} text={messages.NOT_A_MEMBER}/>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Login

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