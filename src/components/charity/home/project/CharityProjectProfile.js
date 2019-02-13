import React from 'react'
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_LIGHT_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'
import format from 'string-format'
import ProjectInfoRow from 'src/components/home/project/ProjectInfoRow'
import ProgressBar from 'react-native-progress/Bar'
import {booleanToGender} from 'src/utils/farsiUtils'
import Projects from 'src/store/projects'


class CharityProjectProfile extends React.Component<Props, void> {

  state = {
    timeSlots: [],
  }

  componentDidMount() {
    const projectId = this.props.navigation.getParam('project', null).id
    this.props.getProjectTimeSlots(projectId)
      .then((response) => this.setState({timeSlots: response}))
  }


  render() {
    const project = this.props.navigation.getParam('project', null)
    const type = this.props.navigation.getParam('type', messages.NON_CASH)
    const projectPicture = this.props.navigation.getParam('projectPicture', null)
    const neededAmount = type === messages.CASH ? project.targetAmount : 0
    const fundedAmount = messages.CASH ? project.fundedAmount : 0
    return (
      <View style={style.projectPage}>

        <CommonHeader hasBack={true} onPress={this.props.navigation.goBack} title={project.name}/>

        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>
          <View style={style.projectTopContainer}>
            <Image source={projectPicture} style={style.pictureStyle}/>
            <View style={style.projectBasicInfoContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold', fontSize: 20}}
                       text={project.name}/>
              </View>
              <TouchableOpacity onPress={type === messages.NON_CASH ? () => this.props.navigation.navigate({
                routeName: 'VolunteersListPage',
                params: {
                  volunteers: project.volunteers,
                },
              }) : () => this.props.navigation.navigate({
                routeName: 'VolunteerTransactionsPage',
                params: {
                  transactions: project.transactions
                }
              })}>
                <Label style={{alignSelf: 'flex-end'}} textStyle={{color: COLOR_BLACK, fontSize: 18}}
                       text={type === messages.CASH ? messages.TRANSACTIONS : messages.VOLUNTEERS}/>
              </TouchableOpacity>
            </View>
            {type === messages.CASH &&
            <View style={style.projectCompletionStyle}>
              <ProgressBar progress={1 - fundedAmount / neededAmount} width={0.8 * SCREEN_WIDTH}
                           color={COLOR_LIGHT_GRAY}
                           borderColor={COLOR_WHITE} unfilledColor={COLOR_BLUE_DEFAULT}/>
              <View style={style.projectBudgetInfo}>
                <View style={{flexDirection: 'row'}}>
                  <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
                         text={fundedAmount + messages.TOMAN}/>
                  <Label textStyle={{fontSize: 16}} text={messages.FUNDED_AMOUNT}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
                         text={neededAmount + messages.TOMAN}/>
                  <Label textStyle={{fontSize: 16}} text={messages.NEEDED_AMOUNT}/>
                </View>
              </View>
            </View>}
          </View>

          <View style={style.projectDescriptionStyle}>
            <Label text={project.description}
                   style={{textAlign: 'right', alignItems: 'flex-end'}}
                   textStyle={{color: COLOR_BLACK, fontSize: 16, textAlign: 'right'}}/>
            <View style={style.dateContainer}>
              <Label text={format(messages.CREATION_DATE, project.startDate)}
                     textStyle={{color: COLOR_DARK_GRAY, fontSize: 14}}/>
              <Label text={format(messages.EXPIRATION_DATE, project.endDate)}
                     textStyle={{color: COLOR_DARK_GRAY, fontSize: 14}}/>
            </View>
          </View>

          {type === messages.NON_CASH &&
          <View style={style.projectInfoContainer}>
            <ProjectInfoRow title={messages.VOLUNTEER_AGE} description={[project.minAge + ' تا ' + project.maxAge]}/>
            <ProjectInfoRow title={messages.VOLUNTEER_GENDER}
                            description={[booleanToGender(project.needMale, project.needFemale)]}/>
            <ProjectInfoRow title={messages.PROJECT_LOCATION} description={[project.city]}/>
            <ProjectInfoRow title={messages.VOLUNTEER_ABILITIES}
                            ability={true}
                            description={project.abilities}/>
            <ProjectInfoRow title={messages.TIME_SCHEDULE + ':'}
                            timeSlot={true}
                            description={this.state.timeSlots}/>
          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default Projects.providers.projects(CharityProjectProfile)

const style = StyleSheet.create({
  projectPage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  projectTopContainer: {
    backgroundColor: COLOR_WHITE,
    width: SCREEN_WIDTH,
    paddingBottom: 20,
  },
  pictureStyle: {
    height: 0.3 * SCREEN_HEIGHT,
    width: '100%',
  },
  projectBasicInfoContainer: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  projectDescriptionStyle: {
    width: SCREEN_WIDTH,
    backgroundColor: COLOR_WHITE,
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 0.03 * SCREEN_HEIGHT,
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  projectInfoContainer: {
    paddingHorizontal: 25,
    paddingVertical: 0.01 * SCREEN_HEIGHT,
    backgroundColor: COLOR_WHITE,
    width: SCREEN_WIDTH,
    marginBottom: 20,
  },
  projectCompletionStyle: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    marginTop: 10,
  },
  projectBudgetInfo: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 0.1 * SCREEN_WIDTH,
  },
})