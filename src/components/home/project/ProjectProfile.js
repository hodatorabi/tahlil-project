import React from 'react'
import {Image, Keyboard, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_LIGHT_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'
import format from 'string-format'
import ProjectInfoRow from 'src/components/home/project/ProjectInfoRow'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import ProgressBar from 'react-native-progress/Bar'
import InputMessagePopUp from 'src/components/common/popUps/InputMessagePopUp'
import {booleanToGender} from '../../../utils/farsiUtils'
import Projects from '../../../store/projects'
import FeedbackPopup from 'src/components/common/popUps/FeedbackPopup'


class ProjectProfile extends React.Component<Props, void> {

  state = {
    messagePopUpVisible: false,
    amountPopUpVisible: false,
    ratePopupVisible: false,
    projectTimeSlots: [],
  }

  constructor(props) {
    super(props)

    this.onPressCharity = this.onPressCharity.bind(this)
  }

  onPressCharity = (id) => {
    this.props.showCharityProfile(id)
      .then((response) => {
        console.log(response)
        this.props.navigation.navigate({
          routeName: 'CharityProfile',
          params: {
            charity: response,
          },
        })
      })
      .catch((error) => {
        ToastAndroid.show('خطایی رخ داد.', ToastAndroid.SHORT)
      })
  }

  render() {
    const canRate = this.props.navigation.getParam('canRate', false)
    const fromSearch = this.props.navigation.getParam('fromSearch', false)
    const projectId = this.props.navigation.getParam('projectId', null)
    const type = this.props.navigation.getParam('type', messages.NON_CASH)
    let project
    if (type === messages.NON_CASH && !canRate && !fromSearch) {
      project = this.props.nonCashProjects[projectId]
    } else if (type === messages.CASH && !canRate && !fromSearch) {
      project = this.props.cashProjects[projectId]
    } else if (canRate && !fromSearch) {
      project = this.props.navigation.getParam('project', null)
    } else if (fromSearch) {
      project = this.props.searchResultsProjects[projectId]
    }
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
              <TouchableOpacity onPress={() => this.onPressCharity(project.charity.id)}>
                <Label style={{alignSelf: 'flex-end'}} textStyle={{color: COLOR_BLACK, fontSize: 18}}
                       text={'خیریه ' + project.charity.name}/>
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
                   style={{textAlign: 'right'}}
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
            {!canRate && <ProjectInfoRow title={messages.TIME_SCHEDULE + ':'}
                                         timeSlot={true}
                                         description={project.timeSlots}/>}
          </View>}

          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50}}
                        label={!canRate ? (type === messages.NON_CASH ? messages.SEND_REQUEST : messages.PAY) : messages.SEND_FEEDBACK}
                        labelStyle={{fontSize: 20}}
                        onPress={!canRate ? (type === messages.NON_CASH ? () => {
                          this.setState({messagePopUpVisible: true})
                        } : () => {
                          this.setState({amountPopUpVisible: true})
                        }) : () => {
                          this.setState({ratePopupVisible: true})
                        }}/>

        </ScrollView>
        {this.state.amountPopUpVisible && <InputMessagePopUp visible={this.state.amountPopUpVisible}
                                                             title={messages.PAY}
                                                             text={messages.ENTER_PAY_AMOUNT}
                                                             onSend={(amount) => {
                                                               this.props.payProject(project.id, amount)
                                                                 .then(() => {
                                                                   this.props.getCashProjects()
                                                                 })
                                                             }}
                                                             onDismiss={() => {
                                                               Keyboard.dismiss()
                                                               this.setState({amountPopUpVisible: false})
                                                             }}
        />}
        {this.state.messagePopUpVisible && <InputMessagePopUp visible={this.state.messagePopUpVisible}
                                                              title={messages.SEND_REQUEST}
                                                              text={messages.REQUEST_MESSAGE}
                                                              onSend={(message) => {
                                                                this.props.sendRequestToCharity(project.charity.id, project.id, message)
                                                                  .then(() => {
                                                                    this.props.getOutgoingRequests()
                                                                  })
                                                              }}
                                                              onDismiss={() => {
                                                                Keyboard.dismiss()
                                                                this.setState({messagePopUpVisible: false})
                                                              }}/>}
        {this.state.ratePopupVisible &&
        <FeedbackPopup visible={this.state.ratePopupVisible} onDismiss={() => this.setState({ratePopupVisible: false})}
                       onSend={(message, rating) => {
                         this.props.sendFeedbackToCharity(project.charity.id, message, rating)
                           .catch((error) => {
                             console.log('err send feedback for charity', error)
                             ToastAndroid.show('بازخورد شما برای این خیریه قبلا قرستاده شده', ToastAndroid.SHORT)
                           })
                       }}/>}
      </View>
    )
  }
}

export default Projects.providers.projects(ProjectProfile)

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
    height: 0.1 * SCREEN_HEIGHT - 5,
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