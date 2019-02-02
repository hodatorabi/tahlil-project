import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import CharityHomeHeader from 'src/components/charity/home/CharityHomeHeader'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Projects from 'src/store/projects'
import {messages} from 'src/utils/messages'
import {project1} from 'src/utils/sampleData'
import ProjectOverview from 'src/components/home/project/ProjectOverview'

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

class CharityHome extends React.Component<Props, State> {

  state = {
    index: 0,
    routes: [
      {key: 'first', title: messages.MY_NON_CASH_PROJECTS},
      {key: 'second', title: messages.MY_CASH_PROJECTS},
    ],
  }

  componentDidMount(): void {
    console.log(this.props.charityNonCashProjects)
  }

  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <CharityHomeHeader navigation={this.props.navigation}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => FirstRoute(this.props.charityNonCashProjects, this.props.navigation),
            second: () => SecondRoute(this.props.charityCashProjects, this.props.navigation),
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

export default Projects.providers.projects(CharityHome)

const style = StyleSheet.create({})