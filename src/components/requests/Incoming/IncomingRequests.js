import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import IncomingRequest from 'src/components/requests/Incoming/IncomingRequest'
import {PROJECT_SAMPLE_PIC1, PROJECT_SAMPLE_PIC2} from 'src/assets/styles/icons'


class IncomingRequests extends React.Component<Props, void> {

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <IncomingRequest projectPicture={PROJECT_SAMPLE_PIC1} charityName={'رعد'} projectName={'بازی با کودکان'}/>
          <IncomingRequest projectPicture={PROJECT_SAMPLE_PIC2}/>
          <IncomingRequest projectPicture={PROJECT_SAMPLE_PIC1}/>
        </ScrollView>
      </View>
    )
  }
}

export default IncomingRequests

const style = StyleSheet.create({})