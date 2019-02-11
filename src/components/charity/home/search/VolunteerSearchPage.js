import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT} from 'src/assets/styles/style'
import VolunteerOverview from 'src/components/charity/home/volunteer/VolunteerOverview'
import Projects from 'src/store/projects'
import VolunteerSearchBar from 'src/components/charity/home/search/VolunteerSearchBar'

class VolunteerSearchPage extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onSearch = this.onSearch.bind(this)
  }

  state = {
    volunteers: [],
  }

  onSearch(filters) {
    console.log('on search', filters)
    this.props.searchVolunteers(filters)
      .then((response) => {
        console.log(response)
        this.setState({volunteers: response})
      })

  }


  render() {
    console.log(this.props.navigation.getParam('filters', {}))
    let filters = this.props.navigation.getParam('filters', {})
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.SEARCH} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
        <VolunteerSearchBar onSearch={() => this.onSearch(filters)} navigation={this.props.navigation}/>
        <ScrollView contentContainerStyle={{paddingTop: 0.02 * SCREEN_HEIGHT}}>
          {this.state.volunteers.map((item, index) => (
            <VolunteerOverview volunteer={item} onPress={() => this.props.navigation.navigate({
              routeName: 'VolunteerProfile',
              params: {
                volunteer: item,
              },
            })}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Projects.providers.projects(VolunteerSearchPage)

const style = StyleSheet.create({})