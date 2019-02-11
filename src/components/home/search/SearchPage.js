import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import SearchBar from 'src/components/home/search/SearchBar'
import Projects from 'src/store/projects'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import {projectSamplePics} from 'src/assets/styles/icons'

class SearchPage extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onSearch = this.onSearch.bind(this)
  }

  state = {
    projects: [],
    type: messages.NON_CASH,
  }

  onSearch(name, filters, type, cashFilters) {
    if (type === 1) {
      filters['name'] = name
      console.log('on search', filters)
      this.props.searchNonCashProjects(filters)
        .then((response) => this.setState({projects: this.props.searchResultsProjects, type: messages.NON_CASH}))
    } else if (type === 2) {
      cashFilters['name'] = name
      console.log('cash')
      this.props.searchCashProjects(cashFilters)
        .then((response) => this.setState({projects: this.props.searchResultsProjects, type: messages.CASH}))
    }
  }


  render() {
    console.log(this.props.navigation.getParam('filters', {}))
    let filters = this.props.navigation.getParam('filters', {})
    let cashFilters = this.props.navigation.getParam('cashFilters', {})
    console.log(cashFilters)
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.SEARCH} hasBack={true} onPress={() => this.props.navigation.goBack('Search')}/>
        <SearchBar navigation={this.props.navigation}
                   onSearch={(name, type) => this.onSearch(name, filters, type, cashFilters)}/>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          {this.state.projects && this.state.projects.map((item, index) => (
            <ProjectOverview projectPicture={projectSamplePics[item.id % 11]} type={this.state.type}
                             projectName={item.name}
                             charityName={item.charity.name}
                             projectStartDate={item.startDate}
                             projectEndDate={item.endDate}
                             onPress={() => {
                               this.props.navigation.navigate({
                                 routeName: 'ProjectProfile',
                                 params: {
                                   projectId: index,
                                   fromSearch: true,
                                   type: this.state.type,
                                   projectPicture: projectSamplePics[item.id % 11],
                                 },
                               })
                             }}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Projects.providers.projects(SearchPage)

const style = StyleSheet.create({})