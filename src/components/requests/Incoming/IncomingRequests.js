import React from 'react'
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native'
import IncomingRequest from 'src/components/requests/Incoming/IncomingRequest'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'
import InputMessagePopUp from 'src/components/common/popUps/InputMessagePopUp'
import {messages} from 'src/utils/messages'
import Projects from '../../../store/projects'


class IncomingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onMessagePress = this.onMessagePress.bind(this)
    this.onReject = this.onReject.bind(this)
  }

  state = {
    messagePopUpVisible: false,
    inputMessagePopUpVisible: false,
    message: '',
  }

  onMessagePress = (message) => {
    this.setState({message: message, messagePopUpVisible: true})
  }

  onReject = () => {
    this.setState({inputMessagePopUpVisible: true})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          {this.props.incomingRequests.map((item, index) => (
            <IncomingRequest onReject={this.onReject} request={item}
                             onMessagePress={() => this.onMessagePress(item.message)}/>
          ))}
        </ScrollView>
        <MessagePopUp visible={this.state.messagePopUpVisible}
                      title={messages.CHARITY_MESSAGE}
                      message={this.state.message}
                      onDismiss={() => {
                        this.setState({messagePopUpVisible: false})
                      }}/>
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

export default Projects.providers.projects(IncomingRequests)

const style = StyleSheet.create({})