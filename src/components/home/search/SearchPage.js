import React from 'react'
import {StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import SearchBar from 'src/components/home/search/SearchBar'
import Projects from 'src/store/projects'

class SearchPage extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(name, filters, type) {
    if (type === 1) {
      filters['name'] = name
      console.log('on search', filters)
      this.props.searchNonCashProjects(filters)
        .then((response) => console.log('res', response))
    } else if (type === 2) {
      console.log('cash')
    }
  }


  render() {
    console.log(this.props.navigation.getParam('filters', {}))
    let filters = this.props.navigation.getParam('filters', {})
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.SEARCH} hasBack={true} onPress={() => this.props.navigation.goBack('Search')}/>
        <SearchBar navigation={this.props.navigation} onSearch={(name, type) => this.onSearch(name, filters, type)}/>
      </View>
    )
  }
}

export default Projects.providers.projects(SearchPage)

const style = StyleSheet.create({})