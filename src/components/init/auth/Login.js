import React from 'react'
import NavigationService from 'src/utils/navigationService'
import {SPLASH_LOGO} from 'src/assets/styles/icons'

class Login extends React.Component<Props, State> {

  componentDidMount() {
    setTimeout(() => NavigationService.reset(['AuthNavigator']), 5000)
  }

  render() {
    return (
      <View style={style.launchContainer}>
        <Image source={SPLASH_LOGO} style={style.splashImageStyle}/>
        <Label text={'سامانه ارائه خدمات داوطلبانه'}/>
        <Spinner style={{position: 'absolute', bottom: 60}} isVisible={true} color={COLOR_BLUE_DEFAULT}
                 type={'Circle'}/>
      </View>
    )
  }
}

export default Login