import React from 'react'
import {StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'


class NewCashProject extends React.Component<Props, void> {

  render() {
    return (
      <View>
        <CommonHeader title={'an'} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
      </View>
    )
  }
}

export default NewCashProject

const style = StyleSheet.create({})