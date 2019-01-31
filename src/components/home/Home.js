import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import HomeHeader from 'src/components/home/HomeHeader'
import {project1} from 'src/utils/sampleData'
import Projects from '../../store/projects'
import {messages} from '../../utils/messages'

class Home extends React.Component<Props, State> {


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <HomeHeader navigation={this.props.navigation}/>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          {this.props.nonCashProjects && this.props.nonCashProjects.map((item, index) => (
            <ProjectOverview projectPicture={project1.projectPicture} type={project1.projectType}
                             projectName={item.name}
                             charityName={item.charity.name}
                             projectStartDate={item.startDate}
                             projectEndDate={item.endDate}
                             onPress={() => {
                               this.props.navigation.navigate({
                                 routeName: 'ProjectProfile',
                                 params: {
                                   project: item,
                                   type: messages.NON_CASH,
                                   projectPicture: project1.projectPicture
                                 },
                               })
                             }}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default Projects.providers.projects(Home)

const style = StyleSheet.create({})