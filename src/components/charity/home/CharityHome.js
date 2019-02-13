import React from 'react'
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import CharityHomeHeader from 'src/components/charity/home/CharityHomeHeader'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Projects from 'src/store/projects'
import {messages} from 'src/utils/messages'
import CharityProjectOverview from 'src/components/charity/home/project/CharityProjectOverview'
import ProjectTypePopup from 'src/components/common/popUps/ProjectTypePopup'
import {projectSamplePics} from 'src/assets/styles/icons'

const FirstRoute = (projects, navigation, refreshing, onRefresh) => (
  <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }>
    {projects && projects.map((item, index) => (
      <CharityProjectOverview projectPicture={projectSamplePics[item.id % 11]} type={messages.NON_CASH}
                              projectName={item.name}
                              charityName={item.charity.name}
                              projectStartDate={item.startDate}
                              projectEndDate={item.endDate}
                              numberOfVolunteers={item.volunteers.length}
                              onPress={() => {
                                navigation.navigate({
                                  routeName: 'CharityProjectProfile',
                                  params: {
                                    project: item,
                                    type: messages.NON_CASH,
                                    projectPicture: projectSamplePics[item.id % 11],
                                  },
                                })
                              }}/>
    ))}
  </ScrollView>
)
const SecondRoute = (projects, navigation, refreshing, onRefresh) => (
  <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }>
    {projects && projects.map((item, index) => (
      <CharityProjectOverview projectPicture={projectSamplePics[item.id % 11]} type={messages.CASH}
                              projectName={item.name}
                              charityName={item.charity.name}
                              projectStartDate={item.startDate}
                              projectEndDate={item.endDate}
                              numberOfVolunteers={item.transactions.length}
                              onPress={() => {
                                navigation.navigate({
                                  routeName: 'CharityProjectProfile',
                                  params: {
                                    project: item,
                                    type: messages.CASH,
                                    projectPicture: projectSamplePics[item.id % 11],
                                  },
                                })
                              }}/>
    ))}
  </ScrollView>
)

class CharityHome extends React.Component<Props, State> {

  state = {
    refreshing: false,
    cashRefreshing: false,
    newProjectPopupVisible: false,
    index: 0,
    routes: [
      {key: 'first', title: messages.MY_NON_CASH_PROJECTS},
      {key: 'second', title: messages.MY_CASH_PROJECTS},
    ],
  }

  constructor(props) {
    super(props)

    this.onRefresh = this.onRefresh.bind(this)
    this.onCashRefresh = this.onCashRefresh.bind(this)
    this.navigateToNewProject = this.navigateToNewProject.bind(this)
  }

  componentDidMount(): void {
    console.log(this.props.charityNonCashProjects)
  }

  onRefresh = () => {
    this.setState({refreshing: true})
    this.props.getCharityNonCashProjects()
      .then(() => this.setState({refreshing: false}))
  }

  onCashRefresh = () => {
    this.setState({cashRefreshing: true})
    this.props.getCharityCashProjects()
      .then(() => {
        this.setState({cashRefreshing: false})
      })
  }

  navigateToNewProject(type) {
    if (type === 0) {
      this.setState({newProjectPopupVisible: false})
      this.props.navigation.navigate({routeName: 'NewNonCashProject', key: 'CreateNonCash'})
    } else if (type === 1) {
      this.setState({newProjectPopupVisible: false})
      this.props.navigation.navigate('NewCashProject')
    }
  }

  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <CharityHomeHeader onPressNewProject={() => this.setState({newProjectPopupVisible: true})}
                           navigation={this.props.navigation}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => FirstRoute(this.props.charityNonCashProjects, this.props.navigation, this.state.refreshing, this.onRefresh),
            second: () => SecondRoute(this.props.charityCashProjects, this.props.navigation, this.state.cashRefreshing, this.onCashRefresh),
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
        <ProjectTypePopup visible={this.state.newProjectPopupVisible} verifyText={'نوع پروژه موردنظر را انتخاب کنید'}
                          onDismiss={() => this.setState({newProjectPopupVisible: false})}
                          onVerify={(type) => this.navigateToNewProject(type)}/>
      </View>
    )
  }
}

export default Projects.providers.projects(CharityHome)

const style = StyleSheet.create({})