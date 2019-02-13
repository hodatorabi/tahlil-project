import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import VolunteerTransactionItem from 'src/components/charity/home/volunteer/VolunteerTransactionItem'

class VolunteerTransactionsPage extends React.Component<Props, State> {


  render() {
    const transactions = this.props.navigation.getParam('transactions', [])
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.TRANSACTIONS} hasBack={true}
                      onPress={() => this.props.navigation.goBack()}/>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {transactions.length > 0 ? transactions.map((item, index) => (
            <VolunteerTransactionItem transaction={item} onPress={() => this.props.navigation.navigate({
              routeName: 'VolunteerProfile',
              params: {
                volunteer: item.volunteer,
                canRate: true
              },
            })}/>
          )) : <Label text={'NO TRANSACTIONS'}/>}
        </ScrollView>
      </View>
    )
  }
}

export default VolunteerTransactionsPage

const style = StyleSheet.create({})