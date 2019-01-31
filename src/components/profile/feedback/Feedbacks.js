import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Auth from '../../../store/auth'


class Feedbacks extends React.Component<Props, State> {

  componentDidMount(): void {
    this.props.getFeedbacks()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {this.props.feedbacks && this.props.feedbacks.map((item, index) => (
            <FeedbackItem feedback={item}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(Feedbacks)

const style = StyleSheet.create({})