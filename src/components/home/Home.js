import React from 'react'
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import HomeHeader from 'src/components/home/HomeHeader'
import Projects from '../../store/projects'
import {messages} from '../../utils/messages'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {SCREEN_WIDTH} from '../../assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from '../../assets/styles/colors'
import {projectSamplePics} from 'src/assets/styles/icons'

const FirstRoute = (projects, navigation, onRefresh) => (
  <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}
              refreshControl={
                <RefreshControl
                  onRefresh={onRefresh}
                />
              }>
    {projects && projects.map((item, index) => (
      <ProjectOverview projectPicture={projectSamplePics[item.id % 11]} type={messages.NON_CASH}
                       projectName={item.name}
                       charityName={item.charity.name}
                       projectStartDate={item.startDate}
                       projectEndDate={item.endDate}
                       onPress={() => {
                         navigation.navigate({
                           routeName: 'ProjectProfile',
                           params: {
                             projectId: index,
                             type: messages.NON_CASH,
                             projectPicture: projectSamplePics[item.id % 11],
                           },
                         })
                       }}/>
    ))}
  </ScrollView>
)
const SecondRoute = (projects, navigation, onRefresh) => (
  <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}
              refreshControl={
                <RefreshControl
                  onRefresh={onRefresh}
                />
              }>
    {projects && projects.map((item, index) => (
      <ProjectOverview projectPicture={projectSamplePics[item.id % 11]} type={messages.CASH}
                       projectName={item.name}
                       charityName={item.charity.name}
                       projectStartDate={item.startDate}
                       projectEndDate={item.endDate}
                       onPress={() => {
                         navigation.navigate({
                           routeName: 'ProjectProfile',
                           params: {
                             projectId: index,
                             type: messages.CASH,
                             projectPicture: projectSamplePics[item.id % 11],
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

  onRefresh = () => {
    this.props.getNonCashProjects()
    this.props.getCashProjects()
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <HomeHeader navigation={this.props.navigation}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => FirstRoute(this.props.nonCashProjects, this.props.navigation, this.onRefresh),
            second: () => SecondRoute(this.props.cashProjects, this.props.navigation, this.onRefresh),
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