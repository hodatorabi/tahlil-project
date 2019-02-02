import React from 'react'
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import FeedbackItem from 'src/components/profile/feedback/FeedbackItem'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Auth from 'src/store/auth'
import Label from 'src/components/common/Label'


class CharityFeedbacks extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onRefresh = this.onRefresh.bind(this)
  }

  state = {
    refreshing: false
  }

  onRefresh() {
    this.setState({refreshing: true})
    this.props.getCharityProfile()
    this.props.getCharityFeedbacks()
      .then(() => this.setState({refreshing: false}))
  }

  componentDidMount(): void {
    this.props.getCharityFeedbacks()
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
          {this.props.charityFeedbacks.length > 0 ? this.props.charityFeedbacks.map((item, index) => (
            <FeedbackItem charity={true} feedback={item}/>
          )) : <Label text={'NO FEEDBACK'}/>}
        </ScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(CharityFeedbacks)

const style = StyleSheet.create({})