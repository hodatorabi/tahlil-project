import React from 'react'
import {StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'


class NewNonCashProject extends React.Component<Props, void> {

  render() {
    return (
      <View>
        <CommonHeader title={'an'} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
      </View>
    )
  }
}

export default NewNonCashProject

const style = StyleSheet.create({})