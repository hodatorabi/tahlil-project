import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import IncomingRequest from 'src/components/requests/Incoming/IncomingRequest'
import {request1, request2, request3} from 'src/utils/sampleData'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'


class IncomingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onMessagePress = this.onMessagePress.bind(this)
  }

  state = {
    messagePopUpVisible: false,
    message: '',
  }

  onMessagePress = (request) => {
    this.setState({message: request.message, messagePopUpVisible: true})
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <IncomingRequest onMessagePress={() => this.onMessagePress(request1)} project={request1.project}/>
          <IncomingRequest onMessagePress={() => this.onMessagePress(request2)} project={request2.project}/>
          <IncomingRequest onMessagePress={() => this.onMessagePress(request3)} project={request3.project}/>
        </ScrollView>
        <MessagePopUp
          onDismiss={() => {
            this.setState({messagePopUpVisible: false})
          }}
          visible={this.state.messagePopUpVisible}
          message={this.state.message}/>
      </View>
    )
  }
}

export default IncomingRequests

const style = StyleSheet.create({})