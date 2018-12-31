import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SPLASH_LOGO} from 'src/assets/styles/icons'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import Spinner from 'react-native-spinkit'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import NavigationService from 'src/utils/navigationService'

class Launch extends React.Component<Props, State> {

  componentDidMount() {
    setTimeout(() => NavigationService.reset(['AuthNavigator']), 2000)
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

export default Launch

const style = StyleSheet.create({
  launchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    width: 0.7 * SCREEN_WIDTH,
    resizeMode: 'contain',
  },

})