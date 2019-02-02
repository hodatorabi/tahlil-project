import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import VolunteerOverview from 'src/components/charity/home/volunteer/VolunteerOverview'
import Projects from 'src/store/projects'
import SearchBar from 'src/components/home/search/SearchBar'

class VolunteerSearchPage extends React.Component<Props, State> {


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.SEARCH} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
        <SearchBar/>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {this.props.volunteers.length > 0 ? this.props.volunteers.map((item, index) => (
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

export default Projects.providers.projects(VolunteerSearchPage)

const style = StyleSheet.create({})