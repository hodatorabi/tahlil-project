import React from 'react'
import HeaderWithLogo from 'src/components/common/HeaderWithLogo'
import {StyleSheet, View} from 'react-native'
import Label from 'src/components/common/Label'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'

class Login extends React.Component<Props, State> {

  render() {
    return (
      <View style={style.login}>
        <HeaderWithLogo/>
        <Label text={messages.WELCOME_MESSAGE}
               textStyle={style.welcomeTextStyle}
               style={style.welcomeContainer}/>
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
  },
})