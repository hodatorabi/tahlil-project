import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import OutgoingRequest from 'src/components/requests/Outgoing/OutgoingRequest'
import {request4, request5} from 'src/utils/sampleData'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'
import {messages} from 'src/utils/messages'


class OutgoingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onReasonPress = this.onReasonPress.bind(this)
  }

  state = {
    reasonPopUpVisible: false,
    reason: '',
  }

  onReasonPress(request) {
    this.setState({reason: request.reason, reasonPopUpVisible: true})
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <OutgoingRequest onReasonPress={() => this.onReasonPress(request4)} request={request4}/>
          <OutgoingRequest onReasonPress={() => this.onReasonPress(request5)} request={request5}/>
        </ScrollView>
        <MessagePopUp visible={this.state.reasonPopUpVisible}
                      title={messages.CHARITY_REASON}
                      message={this.state.reason}
                      onDismiss={() => {
                        this.setState({reasonPopUpVisible: false})
                      }}/>
      </View>
    )
  }
}

export default OutgoingRequests

const style = StyleSheet.create({})