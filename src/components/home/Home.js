import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import HomeHeader from 'src/components/home/HomeHeader'
import {project1} from 'src/utils/sampleData'
import Projects from '../../store/projects'
import {messages} from '../../utils/messages'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {SCREEN_WIDTH} from '../../assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from '../../assets/styles/colors'

const FirstRoute = (projects, navigation) => (
  <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
    {projects && projects.map((item, index) => (
      <ProjectOverview projectPicture={project1.projectPicture} type={messages.NON_CASH}
                       projectName={item.name}
                       charityName={item.charity.name}
                       projectStartDate={item.startDate}
                       projectEndDate={item.endDate}
                       onPress={() => {
                         navigation.navigate({
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
)
const SecondRoute = (projects, navigation) => (
  <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
    {projects && projects.map((item, index) => (
      <ProjectOverview projectPicture={project1.projectPicture} type={messages.CASH}
                       projectName={item.name}
                       charityName={item.charity.name}
                       projectStartDate={item.startDate}
                       projectEndDate={item.endDate}
                       onPress={() => {
                         navigation.navigate({
                           routeName: 'ProjectProfile',
                           params: {
                             project: item,
                             type: messages.CASH,
                             projectPicture: project1.projectPicture
                           },
                         })
                       }}/>
    ))}
  </ScrollView>
)

class Home extends React.Component<Props, State> {

  state = {
    index: 0,
    routes: [
      {key: 'first', title: messages.NON_CASH},
      {key: 'second', title: messages.CASH},
    ],
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <HomeHeader navigation={this.props.navigation}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => FirstRoute(this.props.nonCashProjects, this.props.navigation),
            second: () => SecondRoute(this.props.cashProjects, this.props.navigation),
          })}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: SCREEN_WIDTH}}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={{backgroundColor: COLOR_WHITE}}
              indicatorStyle={{backgroundColor: COLOR_BLUE_DEFAULT}}
              labelStyle={{color: COLOR_DARK_BLUE, fontFamily: 'IRANSansMobile'}}
            />
          }
        />
      </View>
    )
  }
}

export default Projects.providers.projects(Home)

const style = StyleSheet.create({})