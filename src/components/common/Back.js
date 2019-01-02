import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import {ICON_BACK} from 'src/assets/styles/icons'

const backHolderSize = SCREEN_HEIGHT * .125
const bulletSize = 15

class Back extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={[style.back, this.props.style]}
                        activeOpacity={.9}
                        onPress={this.props.onPress}
      >
        <Image source={ICON_BACK}
               style={style.backImage}
        />
      </TouchableOpacity>
    )
  }
}

export default Back

const style = StyleSheet.create({
  back: {
    width: backHolderSize,
    height: backHolderSize,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
    paddingHorizontal: 15,
  },
  backImage: {
    height: bulletSize,
    width: bulletSize,
    resizeMode: 'contain',
  },
})
