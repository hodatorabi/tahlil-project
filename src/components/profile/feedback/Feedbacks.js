import React from 'react'
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Auth from '../../../store/auth'
import Label from 'src/components/common/Label'


class Feedbacks extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onRefresh = this.onRefresh.bind(this)
  }

  state = {
    refreshing: false
  }

  onRefresh() {
    this.setState({refreshing: true})
    this.props.getProfile()
    this.props.getFeedbacks()
      .then(() => this.setState({refreshing: false}))
  }

  componentDidMount(): void {
    this.props.getFeedbacks()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                      />
                    }>
          {this.props.feedbacks.length > 0 ? this.props.feedbacks.map((item, index) => (
            <FeedbackItem charity={false} feedback={item}/>
          )) : <Label text={'NO FEEDBACK'}/>}
        </ScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(Feedbacks)

const style = StyleSheet.create({})