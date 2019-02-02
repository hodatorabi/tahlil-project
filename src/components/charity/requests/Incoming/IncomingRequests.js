import React from 'react'
import {Keyboard, RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'
import InputMessagePopUp from 'src/components/common/popUps/InputMessagePopUp'
import {messages} from 'src/utils/messages'
import Projects from 'src/store/projects'
import IncomingRequest from 'src/components/charity/requests/Incoming/IncomingRequest'


class IncomingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onMessagePress = this.onMessagePress.bind(this)
    this.onReject = this.onReject.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  state = {
    messagePopUpVisible: false,
    inputMessagePopUpVisible: false,
    message: '',
    refreshing: false,
    requestId: ''
  }

  onMessagePress = (message) => {
    this.setState({message: message, messagePopUpVisible: true})
  }

  onReject = (request) => {
    this.setState({inputMessagePopUpVisible: true, requestId: request.id})
  }

  onRefresh() {
    this.setState({refreshing: true})
    this.props.getCharityIncomingRequests()
      .then(() => this.setState({refreshing: false}))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                      />
                    }>
          {this.props.charityIncomingRequests && this.props.charityIncomingRequests.map((item, index) => (
            <IncomingRequest onReject={() => this.onReject(item)} request={item}
                             onMessagePress={() => this.onMessagePress(item.message)}
                             onAccept={() => {
                               this.props.acceptVolunteerRequest(item.id)
                                 .then(() => {
                                   this.props.getCharityIncomingRequests()
                                 })
                                 .catch((error) => {
                                   console.log('in err', error)
                                 })
                             }}/>
          ))}
        </ScrollView>
        <MessagePopUp visible={this.state.messagePopUpVisible}
                      title={messages.VOLUNTEER_MESSAGE}
                      message={this.state.message}
                      onDismiss={() => {
                        this.setState({messagePopUpVisible: false})
                      }}/>
        <InputMessagePopUp visible={this.state.inputMessagePopUpVisible} title={messages.REJECT_REQUEST}
                           text={messages.REJECT_REASON}
                           onSend={(reason) => {
                             this.props.rejectVolunteerRequest(this.state.requestId, reason)
                               .then(() => {
                                 this.props.getCharityIncomingRequests()
                               })
                           }}
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