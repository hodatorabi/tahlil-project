import React from 'react'
import {Image, Keyboard, ScrollView, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import ProjectTypeTag from 'src/components/home/project/ProjectTypeTag'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'
import format from 'string-format'
import ProjectInfoRow from 'src/components/home/project/ProjectInfoRow'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import ProgressBar from 'react-native-progress/Bar'
import InputMessagePopUp from 'src/components/common/popUps/InputMessagePopUp'


class ProjectProfile extends React.Component<Props, void> {

  state = {
    messagePopUpVisible: false,
  }

  render() {
    const project = this.props.navigation.getParam('project', null)
    const neededAmount = project.info.neededAmount
    const fundedAmount = project.info.fundedAmount
    return (

      <View style={style.projectPage}>

        <CommonHeader hasBack={true} onPress={this.props.navigation.goBack} title={project.projectName}/>

        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>
          <View style={style.projectTopContainer}>
            <Image source={project.projectPicture} style={style.pictureStyle}/>
            <View style={style.projectBasicInfoContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <ProjectTypeTag type={project.projectType}/>
                <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold', fontSize: 20}}
                       text={project.projectName}/>
              </View>
              <Label style={{alignSelf: 'flex-end'}} textStyle={{color: COLOR_BLACK, fontSize: 18}}
                     text={project.charityName}/>
            </View>
            {project.projectType === messages.CASH &&
            <View style={style.projectCompletionStyle}>
              <ProgressBar progress={1 - fundedAmount / neededAmount} width={0.8 * SCREEN_WIDTH} color={COLOR_WHITE}
                           borderColor={COLOR_BLUE_DEFAULT} unfilledColor={COLOR_BLUE_DEFAULT}/>
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
            <Label text={project.projectDescription}
                   style={{textAlign: 'right'}}
                   textStyle={{color: COLOR_BLACK, fontSize: 16, textAlign: 'right'}}/>
            <View style={style.dateContainer}>
              <Label text={format(messages.CREATION_DATE, project.projectStartDate)}
                     textStyle={{color: COLOR_DARK_GRAY, fontSize: 14}}/>
              <Label text={format(messages.EXPIRATION_DATE, project.projectEndDate)}
                     textStyle={{color: COLOR_DARK_GRAY, fontSize: 14}}/>
            </View>
          </View>

          {project.projectType === messages.NON_CASH &&
          <View style={style.projectInfoContainer}>
            <ProjectInfoRow title={messages.VOLUNTEER_AGE} description={[project.info.age]}/>
            <ProjectInfoRow title={messages.VOLUNTEER_GENDER} description={[project.info.gender]}/>
            <ProjectInfoRow title={messages.PROJECT_LOCATION} description={[project.info.location]}/>
            <ProjectInfoRow title={messages.VOLUNTEER_ABILITIES}
                            description={project.info.abilities}/>
          </View>}

          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50}}
                        label={project.projectType === messages.NON_CASH ? messages.SEND_REQUEST : messages.PAY}
                        labelStyle={{fontSize: 20}}
                        onPress={() => {
                          this.setState({messagePopUpVisible: true})
                        }}/>

        </ScrollView>
        <InputMessagePopUp visible={this.state.messagePopUpVisible}
                           onDismiss={() => {
                             Keyboard.dismiss()
                             this.setState({messagePopUpVisible: false})
                           }}/>
      </View>
    )
  }
}

export default ProjectProfile

const style = StyleSheet.create({
  projectPage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  projectTopContainer: {
    backgroundColor: COLOR_WHITE,
    width: SCREEN_WIDTH,
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