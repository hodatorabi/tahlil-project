import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import HomeHeader from 'src/components/home/HomeHeader'
import {project1, project2} from 'src/utils/sampleData'

class Home extends React.Component<Props, State> {


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <HomeHeader navigation={this.props.navigation}/>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <ProjectOverview projectPicture={project1.projectPicture} type={project1.projectType}
                           projectName={project1.projectName}
                           charityName={project1.charityName}
                           projectStartDate={project1.projectStartDate}
                           projectEndDate={project1.projectEndDate}
                           onPress={() => {
                             this.props.navigation.navigate({
                               routeName: 'ProjectProfile',
                               params: {project: project1},
                             })
                           }}/>
          <ProjectOverview projectPicture={project2.projectPicture} type={project2.projectType}
                           projectName={project2.projectName}
                           charityName={project2.charityName}
                           projectStartDate={project2.projectStartDate}
                           projectEndDate={project2.projectEndDate}
                           onPress={() => {
                             this.props.navigation.navigate({
                               routeName: 'ProjectProfile',
                               params: {project: project2},
                             })
                           }}/>
        </ScrollView>
      </View>
    )
  }
}

export default Home

const style = StyleSheet.create({})