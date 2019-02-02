import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {ICON_EXPLORE, LOGO_HEADER} from 'src/assets/styles/icons'
import {commonHeaderHeight, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'


class CharityHomeHeader extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[style.headerWithLogo, this.props.style]}>
        <TouchableOpacity
          style={style.myProjectsLabelContainer}>
          <Label text={messages.CREATE_NEW_PROJECT} textStyle={{fontSize: 16, color: COLOR_BLUE_DEFAULT}}/>
        </TouchableOpacity>
        <Image source={LOGO_HEADER} style={style.headerLogo}/>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('VolunteerSearchPage')}
          style={style.iconContainer}>
          <Image source={ICON_EXPLORE} tintColor={COLOR_BLUE_DEFAULT} style={{width: 30, resizeMode: 'contain'}}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CharityHomeHeader

const style = StyleSheet.create({
  headerWithLogo: {
    height: commonHeaderHeight,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
  },
  headerLogo: {
    width: 0.33 * SCREEN_WIDTH,
    resizeMode: 'contain',
  },
  iconContainer: {
    width: 0.33 * SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  myProjectsLabelContainer: {
    width: 0.33 * SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
})