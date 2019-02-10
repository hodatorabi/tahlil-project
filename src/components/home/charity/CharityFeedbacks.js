import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'


class CharityFeedbacks extends React.Component<Props, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.charity.receivedFeedback)
  }

  render() {
    const charity = this.props.charity
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {charity.receivedFeedback.length > 0 ? charity.receivedFeedback.map((item, index) => (
            <FeedbackItem charity={true} feedback={item}/>
          )) : <Label text={'NO FEEDBACK'}/>}
        </ScrollView>
      </View>
    )
  }
}

export default CharityFeedbacks

const style = StyleSheet.create({})