import React from 'react'
import {StyleSheet} from 'react-native'
import OutgoingRequest from 'src/components/requests/Outgoing/OutgoingRequest'
import {messages} from 'src/utils/messages'


class OutgoingRequests extends React.Component<Props, void> {

  render() {
    return (
      <OutgoingRequest status={messages.ACCEPTED}/>
    )
  }
}

export default OutgoingRequests

const style = StyleSheet.create({})