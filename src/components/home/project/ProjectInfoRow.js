import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'


class ProjectInfoRow extends React.Component<Props, void> {

  render() {
    return (
      <View style={[style.containerStyle]}
      >
        <Text style={[style.textStyle, {
          color: COLOR_BLUE_DEFAULT,
          fontFamily: 'IRANSansMobile_Bold',
        }]}>{this.props.description}</Text>
        <Text style={style.textStyle}>{this.props.title}</Text>
        <View style={style.bulletStyle}/>
      </View>
    )
  }
}

export default ProjectInfoRow

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bulletStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLOR_BLUE_DEFAULT,
    marginLeft: 8,
  },
  textStyle: {
    color: COLOR_BLACK,
    fontSize: 18,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})