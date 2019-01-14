import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_WHITE} from 'src/assets/styles/colors'
import ProjectTypeTag from 'src/components/home/project/ProjectTypeTag'
import Label from 'src/components/common/Label'


class ProjectProfile extends React.Component<Props, void> {

  render() {
    const project = this.props.navigation.getParam('project', null)
    return (
      <View style={style.projectPage}>

        <CommonHeader hasBack={true} onPress={this.props.navigation.goBack} title={project.projectName}/>

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
        </View>

        <View>
          
        </View>

      </View>
    )
  }
}

export default ProjectProfile

const style = StyleSheet.create({
  projectPage: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  projectTopContainer: {
    height: 0.4 * SCREEN_HEIGHT,
    backgroundColor: COLOR_WHITE,
    width: SCREEN_WIDTH,
    marginTop: 15,
  },
  pictureStyle: {
    height: 0.3 * SCREEN_HEIGHT,
    width: '100%',
  },
  projectBasicInfoContainer: {
    width: SCREEN_WIDTH,
    height: 0.1 * SCREEN_HEIGHT - 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
})