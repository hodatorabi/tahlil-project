import React from 'react'
import {StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'


class Feedbacks extends React.Component<Props, State> {

  render() {
    return (
      <View style={{flex: 1, paddingTop: 0.02 * SCREEN_HEIGHT}}>
        <FeedbackItem/>
        <FeedbackItem/>
      </View>
    )
  }
}

export default Feedbacks

const style = StyleSheet.create({})