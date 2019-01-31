import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import OutgoingRequest from 'src/components/requests/Outgoing/OutgoingRequest'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'
import {messages} from 'src/utils/messages'
import Projects from '../../../store/projects'


class OutgoingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onReasonPress = this.onReasonPress.bind(this)
  }

  state = {
    reasonPopUpVisible: false,
    reason: '',
  }

  onReasonPress(reason) {
    this.setState({reason: reason, reasonPopUpVisible: true})
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          {this.props.outgoingRequests.map((item, index) => (
            <OutgoingRequest onReasonPress={() => this.onReasonPress(item.rejectionReason)} request={item}/>
          ))}
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

export default Projects.providers.projects(OutgoingRequests)

const style = StyleSheet.create({})