import React from 'react'
import HeaderWithLogo from 'src/components/common/HeaderWithLogo'
import {View} from 'react-native'

class Login extends React.Component<Props, State> {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <HeaderWithLogo/>
      </View>
    )
  }
}

export default Login