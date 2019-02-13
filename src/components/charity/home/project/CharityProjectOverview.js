import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import ProjectTypeTag from 'src/components/home/project/ProjectTypeTag'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import format from 'string-format'
import {messages} from 'src/utils/messages'


class CharityProjectOverview extends React.Component<Props, void> {

  render() {
    return (
      <View style={style.containerStyle}>
        <Image source={this.props.projectPicture} style={style.projectPictureStyle}/>
        <View style={style.bodyStyle}>
          <View style={style.topBodyStyle}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <ProjectTypeTag type={this.props.type}/>
              <View style={{alignItems: 'flex-end'}}>
                <Label textStyle={style.projectNameLabelTextStyle}
                       multiLine={true}
                       style={style.projectNameLabelStyle}
                       text={this.props.projectName}/>
                <Label style={{alignSelf: 'flex-end'}} textStyle={{color: COLOR_BLACK, fontSize: 16}}
                       text={this.props.type === messages.NON_CASH ? messages.NUMBER_OF_VOLUNTEERS + this.props.numberOfVolunteers : 'تعداد پرداخت‌ها: ' + this.props.numberOfVolunteers}/>
              </View>
            </View>
          </View>
          <View style={style.bottomBodyStyle}>
            <CustomButton label={messages.SHOW} onPress={this.props.onPress}/>
            <View style={style.dateContainer}>
              <Label text={format(messages.CREATION_DATE, this.props.projectStartDate)}
                     textStyle={{color: COLOR_DARK_GRAY, fontSize: 14}}/>
              <Label text={format(messages.EXPIRATION_DATE, this.props.projectEndDate)}
                     textStyle={{color: COLOR_DARK_GRAY, fontSize: 14}}/>
            </View>
          </View>
        </View>
      </View>

    )
  }
}

export default CharityProjectOverview

const style = StyleSheet.create({
  containerStyle: {
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 20,
    backgroundColor: COLOR_WHITE,
    alignSelf: 'center',
    marginBottom: 0.02 * SCREEN_HEIGHT,
    paddingBottom: 15,
    elevation: 1,
  },
  projectPictureStyle: {
    height: SCREEN_HEIGHT * 0.17,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  bodyStyle: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  topBodyStyle: {
    width: '100%',
  },
  bottomBodyStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  projectNameLabelStyle: {
    width: 0.52 * SCREEN_WIDTH,
    alignSelf: 'flex-end',
    textAlign: 'right',
    alignItems: 'flex-end'
  },
  projectNameLabelTextStyle: {
    color: COLOR_BLUE_DEFAULT,
    fontFamily: 'IRANSansMobile_Bold',
    fontSize: 18,
    textAlign: 'right'
  }

})