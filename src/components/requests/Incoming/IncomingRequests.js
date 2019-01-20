import React from 'react'
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native'
import IncomingRequest from 'src/components/requests/Incoming/IncomingRequest'
import {request1, request2, request3} from 'src/utils/sampleData'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'
import InputMessagePopUp from 'src/components/common/popUps/InputMessagePopUp'
import {messages} from 'src/utils/messages'


class IncomingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onMessagePress = this.onMessagePress.bind(this)
  }

  state = {
    messagePopUpVisible: false,
    inputMessagePopUpVisible: false,
    message: '',
  }

  onMessagePress = (request) => {
    this.setState({message: request.message, messagePopUpVisible: true})
  }

  onReject = () => {
    this.setState({inputMessagePopUpVisible: true})
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <IncomingRequest onReject={this.onReject} onMessagePress={() => this.onMessagePress(request1)}
                           project={request1.project}/>
          <IncomingRequest onReject={this.onReject} onMessagePress={() => this.onMessagePress(request2)}
                           project={request2.project}/>
          <IncomingRequest onReject={this.onReject} onMessagePress={() => this.onMessagePress(request3)}
                           project={request3.project}/>
        </ScrollView>
        <MessagePopUp
          onDismiss={() => {
            this.setState({messagePopUpVisible: false})
          }}
          visible={this.state.messagePopUpVisible}
          message={this.state.message}/>
        <InputMessagePopUp visible={this.state.inputMessagePopUpVisible} title={messages.REJECT_REQUEST}
                           text={messages.REJECT_REASON}
                           onDismiss={() => {
                             Keyboard.dismiss()
                             this.setState({inputMessagePopUpVisible: false})
                           }}/>
      </View>
    )
  }
}

export default IncomingRequests

const style = StyleSheet.create({})