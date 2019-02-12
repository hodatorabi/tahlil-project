import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {ICON_ENVELOPE, projectSamplePics} from 'src/assets/styles/icons'
import ButtonAccept from 'src/components/common/Buttons/ButtonAccept'
import ButtonReject from 'src/components/common/Buttons/ButtonReject'
import {messages} from 'src/utils/messages'


class IncomingRequest extends React.Component<Props, void> {
  render() {
    const request = this.props.request
    const projectPic = projectSamplePics[request.project.id % 11]
    return (
      <View style={style.containerStyle}>
        <Image source={projectPic} style={style.projectPictureStyle}/>
        <View style={style.bodyStyle}>
          <View style={style.msgContainerStyle}>
            <Text style={[style.bodyTextStyle, {color: COLOR_BLUE_DEFAULT}]}>
              {'خیریه ' + request.charity.name}
              <Text style={[style.bodyTextStyle]}>
                {' برای پروژه '}
                <Text style={[style.bodyTextStyle, {color: COLOR_BLUE_DEFAULT}]}
                      onPress={() => {
                        this.props.navigation.navigate({
                          routeName: 'ProjectProfile',
                          params: {
                            project: request.project,
                            type: messages.NON_CASH,
                            projectPicture: projectSamplePics[request.project.id % 11],
                            fromRequest: true,
                          },
                        })
                      }}>
                  {request.project.name}
                  <Text style={[style.bodyTextStyle]}>
                    {' به کمک شما نیاز دارد.'}
                  </Text>
                </Text>
              </Text>
            </Text>
          </View>
          <View style={style.footerStyle}>
            <View style={style.buttonContainer}>
              <ButtonAccept onPress={this.props.onAccept} style={{marginRight: 20}}/>
              <ButtonReject onPress={this.props.onReject}/>
            </View>
            <TouchableOpacity onPress={this.props.onMessagePress} style={style.messagesButtonContainer}>
              <Label text={messages.CHARITY_MESSAGE} textStyle={{fontSize: 16, color: COLOR_BLUE_DEFAULT}}/>
              <Image source={ICON_ENVELOPE} style={{width: 25, height: 25, marginLeft: 8}}
                     tintColor={COLOR_BLUE_DEFAULT}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default IncomingRequest

const style = StyleSheet.create({
  containerStyle: {
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 20,
    backgroundColor: COLOR_WHITE,
    alignSelf: 'center',
    marginBottom: 0.02 * SCREEN_HEIGHT,
    elevation: 1,
    paddingBottom: 15,
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
    marginTop: 10,
    alignItems: 'center',
  },
  bodyTextStyle: {
    textAlign: 'right',
    fontSize: 18,
    color: COLOR_BLACK,
    fontFamily: 'IRANSansMobile',
    lineHeight: 30,
  },
  footerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  messagesButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  msgContainerStyle: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },

})