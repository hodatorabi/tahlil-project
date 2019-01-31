import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {CHARITY_PROFILE_PIC} from 'src/assets/styles/icons'
import RateItem from 'src/components/profile/feedback/RateItem'


class FeedbackItem extends React.Component<Props, State> {

  render() {
    const feedback = this.props.feedback
    return (
      <View style={style.feedbackContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
          <RateItem rating={feedback.rating}/>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Label text={feedback.charity.name} textStyle={{fontSize: 16, color: COLOR_BLACK}}
                   style={{marginRight: 10}}/>
            <Image source={CHARITY_PROFILE_PIC} style={{width: 45, height: 45, borderRadius: 22.5}}/>
          </View>
        </View>
        {feedback.comment &&
        <Label text={feedback.comment}
               style={{alignSelf: 'flex-end'}}
               textStyle={{fontSize: 16, color: COLOR_BLACK, textAlign: 'right', lineHeight: 30}}/>}
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