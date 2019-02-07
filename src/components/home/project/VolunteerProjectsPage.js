import React from 'react'
import {StyleSheet, View} from 'react-native'
import Projects from 'src/store/projects'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import Label from 'src/components/common/Label'


const FirstRoute = (projects, navigation, loading) => (
  loading ? <Label text={'loading'}/> : <View/>

)
const SecondRoute = (projects, navigation, loading) => (
  loading ? <Label text={'loading'}/> : <View/>
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
          this.setState({loading: false})
        })
    })
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: () => FirstRoute(this.props.nonCashProjects, this.props.navigation, this.state.loading),
            second: () => SecondRoute(this.props.cashProjects, this.props.navigation, this.state.loading),
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