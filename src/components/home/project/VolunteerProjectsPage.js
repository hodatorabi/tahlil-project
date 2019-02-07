import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import Projects from 'src/store/projects'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {project1} from 'src/utils/sampleData'
import Spinner from 'react-native-spinkit'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import CommonHeader from 'src/components/common/CommonHeader'


const FirstRoute = (projects, navigation, loading) => (
  !loading ? <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
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
                               projectPicture: project1.projectPicture,
                               canRate: true
                             },
                           })
                         }}/>
      ))}
    </ScrollView> :
    <View style={{justifyContent: 'center', width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2, alignSelf: 'center'}}>
      <Spinner style={{alignSelf: 'center'}} isVisible={loading} color={COLOR_BLUE_DEFAULT}
               type={'Circle'}/>
    </View>

)
const SecondRoute = (projects, navigation, loading) => (
  !loading ? <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
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
                               projectPicture: project1.projectPicture,
                               canRate: true
                             },
                           })
                         }}/>
      ))}
    </ScrollView> :
    <View style={{justifyContent: 'center', width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2, alignSelf: 'center'}}>
      <Spinner style={{alignSelf: 'center'}} isVisible={loading} color={COLOR_BLUE_DEFAULT}
               type={'Circle'}/>
    </View>
)

class VolunteerProjectsPage extends React.Component<Props, State> {

  state = {
    loading: false,
    index: 0,
    routes: [
      {key: 'first', title: messages.MY_NON_CASH_PROJECTS},
      {key: 'second', title: messages.MY_CASH_PROJECTS},
    ],
  }

  componentDidMount(): void {
    this.setState({loading: true}, () => {
      this.props.getVolunteerNonCashProjects()
        .then(() => {
          this.props.getVolunteerCashProjects()
            .then(() => {
              this.setState({loading: false})
            })
        })
    })
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <CommonHeader hasBack={true} title={messages.MY_PROJECTS} onPress={() => this.props.navigation.goBack()}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => FirstRoute(this.props.volunteerNonCashProjects, this.props.navigation, this.state.loading),
            second: () => SecondRoute(this.props.volunteerCashProjects, this.props.navigation, this.state.loading),
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

export default Projects.providers.projects(VolunteerProjectsPage)

const style = StyleSheet.create({})