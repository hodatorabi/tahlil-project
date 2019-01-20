import React from 'react'
import {Dialog, DialogButton, DialogContent} from 'react-native-popup-dialog'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY} from 'src/assets/styles/colors'
import {Text} from 'react-native'
import {messages} from 'src/utils/messages'


class VerifyPopUp extends React.Component<Props, void> {
  render() {
    return (
      <Dialog
        onDismiss={this.props.onDismiss}
        width={0.8}
        visible={this.props.visible}
        rounded
        actions={[
          <DialogButton
            text={messages.CANCEL}
            onPress={this.props.onDismiss}
            key="button-1"
            textStyle={{color: COLOR_DARK_GRAY, fontFamily: 'IRANSansMobile_Bold'}}
          />,
          <DialogButton
            text={messages.VERIFY}
            onPress={this.props.onDismiss}
            key="button-2"
            textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
          />,
        ]}
      >
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 30,
          }}
        >
          <Text style={{
            fontFamily: 'IRANSansMobile',
            fontSize: 18,
          }}>{this.props.verifyText}</Text>
        </DialogContent>
      </Dialog>
    )
  }
}

export default VerifyPopUp