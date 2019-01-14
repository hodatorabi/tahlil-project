import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_WHITE,} from 'src/assets/styles/colors'


class ProjectProfile extends React.Component<Props, void> {

  render() {
    return (
      <View/>
    )
  }
}

export default ProjectProfile

const style = StyleSheet.create({
  containerStyle: {
    height: SCREEN_HEIGHT * 0.35,
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 20,
    backgroundColor: COLOR_WHITE,
    alignSelf: 'center',
    marginBottom: 0.02 * SCREEN_HEIGHT,
    elevation: 1,
  },
  projectPictureStyle: {
    height: SCREEN_HEIGHT * 0.17,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  bodyStyle: {
    width: '100%',
    height: 0.18 * SCREEN_HEIGHT,
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  topBodyStyle: {
    width: '100%',
    height: '50%',
  },
  bottomBodyStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

})