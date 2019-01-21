import React from 'react'
import {StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'


class Feedbacks extends React.Component<Props, State> {

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: 0.02 * SCREEN_HEIGHT}}>
          <FeedbackItem charityName={'خیریه پگاه'} rating={2}/>
          <FeedbackItem charityName={'خیریه حکمت'} rating={4}/>
        </View>
      </View>
    )
  }
}

export default Feedbacks

const style = StyleSheet.create({})