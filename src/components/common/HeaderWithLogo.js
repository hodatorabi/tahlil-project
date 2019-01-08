import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {LOGO_HEADER} from 'src/assets/styles/icons'
import {commonHeaderHeight, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_WHITE} from 'src/assets/styles/colors'


class HeaderWithLogo extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[style.headerWithLogo, this.props.style]}>
        <Image source={LOGO_HEADER} style={style.headerLogo}/>
      </View>
    )
  }
}

export default HeaderWithLogo

const style = StyleSheet.create({
  headerWithLogo: {
    height: commonHeaderHeight,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
  },
  headerLogo: {
    width: 0.33 * SCREEN_WIDTH,
    resizeMode: 'contain',
  },
})
