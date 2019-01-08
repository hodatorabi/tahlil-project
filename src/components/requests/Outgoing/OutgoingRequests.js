import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {PROJECT_SAMPLE_PIC1, PROJECT_SAMPLE_PIC2, PROJECT_SAMPLE_PIC3} from 'src/assets/styles/icons'
import OutgoingRequest from 'src/components/requests/Outgoing/OutgoingRequest'
import {messages} from 'src/utils/messages'


class OutgoingRequests extends React.Component<Props, void> {

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <OutgoingRequest projectPicture={PROJECT_SAMPLE_PIC3} status={messages.PENDING} charityName={'امام علی'}
                           projectName={'شناسایی بی‌خانمان‌ها'}/>
          <OutgoingRequest projectPicture={PROJECT_SAMPLE_PIC2} status={messages.ACCEPTED}/>
          <OutgoingRequest projectPicture={PROJECT_SAMPLE_PIC1} status={messages.REJECTED}/>
        </ScrollView>
      </View>
    )
  }
}

export default OutgoingRequests

const style = StyleSheet.create({})