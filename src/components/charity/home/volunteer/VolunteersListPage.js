import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import VolunteerOverview from 'src/components/charity/home/volunteer/VolunteerOverview'

class VolunteersListPage extends React.Component<Props, State> {


  render() {
    const volunteers = this.props.navigation.getParam('volunteers', null)
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.VOLUNTEERS} hasBack={true}
                      onPress={() => this.props.navigation.goBack()}/>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {volunteers.length > 0 ? volunteers.map((item, index) => (
            <VolunteerOverview volunteer={item} onPress={() => this.props.navigation.navigate({
              routeName: 'VolunteerProfile',
              params: {
                volunteer: item,
              },
            })}/>
          )) : <Label text={'NO VOLUNTEERS'}/>}
        </ScrollView>
      </View>
    )
  }
}

export default VolunteersListPage

const style = StyleSheet.create({})