import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import {feedback1, feedback2, feedback3, feedback4} from 'src/utils/sampleData'


class Feedbacks extends React.Component<Props, State> {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          <FeedbackItem feedback={feedback1}/>
          <FeedbackItem feedback={feedback2}/>
          <FeedbackItem feedback={feedback3}/>
          <FeedbackItem feedback={feedback4}/>
        </ScrollView>
      </View>
    )
  }
}

export default Feedbacks

const style = StyleSheet.create({})