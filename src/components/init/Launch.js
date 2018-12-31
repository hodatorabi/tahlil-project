import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SPLASH_LOGO} from 'src/assets/styles/icons'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'

class Launch extends React.Component<Props, State> {
  render() {
    return (
      <View style={style.launchContainer}>
        <Image source={SPLASH_LOGO} style={style.splashImageStyle}/>
        <Label text={'سامانه ارائه خدمات داوطلبانه'}/>
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