import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {ICON_STAR} from 'src/assets/styles/icons'
import {COLOR_BLUE_DEFAULT, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'


class RateItem extends React.Component<Props, State> {

  render() {
    return (
      <View style={[style.containerStyle, this.props.style]}>
        <Image source={ICON_STAR} style={{width: 15, height: 15, marginRight: 5}} tintColor={COLOR_WHITE}/>
        <Label text={this.props.rating} textStyle={{fontSize: 16, color: COLOR_WHITE}}/>
      </View>
    )
  }
}

export default RateItem

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: COLOR_BLUE_DEFAULT,
  },
})