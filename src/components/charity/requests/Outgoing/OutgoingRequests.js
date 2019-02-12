import React from 'react'
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import MessagePopUp from 'src/components/common/popUps/MessagePopUp'
import {messages} from 'src/utils/messages'
import Projects from '../../../../store/projects'
import OutgoingRequest from './OutgoingRequest'


class OutgoingRequests extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onReasonPress = this.onReasonPress.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  state = {
    reasonPopUpVisible: false,
    reason: '',
    refreshing: false,
  }

  onReasonPress(reason) {
    this.setState({reason: reason, reasonPopUpVisible: true})
  }

  onRefresh() {
    this.setState({refreshing: true})
    this.props.getCharityOutgoingRequests()
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
          {this.props.charityOutgoingRequests.map((item, index) => (
            <OutgoingRequest navigation={this.props.navigation}
                             onReasonPress={() => this.onReasonPress(item.rejectionReason)} request={item}/>
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