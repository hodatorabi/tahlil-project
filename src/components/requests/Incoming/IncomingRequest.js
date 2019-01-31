import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import format from 'string-format'
import {ICON_ENVELOPE} from 'src/assets/styles/icons'
import ButtonAccept from 'src/components/common/Buttons/ButtonAccept'
import ButtonReject from 'src/components/common/Buttons/ButtonReject'
import {messages} from 'src/utils/messages'
import {project6} from '../../../utils/sampleData'


class IncomingRequest extends React.Component<Props, void> {
  render() {
    const request = this.props.request
    return (
      <View style={style.containerStyle}>
        <Image source={project6.projectPicture} style={style.projectPictureStyle}/>
        <View style={style.bodyStyle}>
          <Label
            style={{width: '95%'}}
            textStyle={style.bodyTextStyle}
            text={format(messages.CHARITY_NEEDS_HELP, request.charity.name, request.project.name)}/>
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
    height: SCREEN_HEIGHT * 0.35,
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 20,
    backgroundColor: COLOR_WHITE,
    alignSelf: 'center',
    marginBottom: 0.02 * SCREEN_HEIGHT,
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
    height: 0.18 * SCREEN_HEIGHT,
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  bodyTextStyle: {
    textAlign: 'right',
    fontSize: 18,
    color: COLOR_BLACK,
  },
  footerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '50%',
  },
  messagesButtonContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },

})