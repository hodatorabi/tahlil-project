import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {CHARITY_PROFILE_PIC} from 'src/assets/styles/icons'


class FeedbackItem extends React.Component<Props, State> {

  render() {
    return (
      <View style={style.feedbackContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Label text={'موسسه پگاه'} textStyle={{fontSize: 16, color: COLOR_BLACK}} style={{marginRight: 10}}/>
          <Image source={CHARITY_PROFILE_PIC} style={{width: 45, height: 45, borderRadius: 22.5}}/>
        </View>
      </View>
    )
  }
}

export default FeedbackItem

const style = StyleSheet.create({
  feedbackContainer: {
    width: 0.95 * SCREEN_WIDTH,
    backgroundColor: COLOR_WHITE,
    marginBottom: 0.015 * SCREEN_HEIGHT,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
    paddingHorizontal: 15,
    alignSelf: 'center',
    elevation: 1,
  },
})