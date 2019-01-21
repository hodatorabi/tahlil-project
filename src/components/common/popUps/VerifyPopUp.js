import React from 'react'
import {Dialog, DialogButton, DialogContent} from 'react-native-popup-dialog'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import Label from 'src/components/common/Label'


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
            onPress={this.props.onVerify}
            key="button-2"
            textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
          />,
        ]}
      >
        <DialogContent
          style={{
            backgroundColor: COLOR_WHITE,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 30,
          }}
        >
          <Label text={this.props.verifyText}
                 textStyle={{
                   fontFamily: 'IRANSansMobile',
                   fontSize: 18,
                   textAlign: 'center',
                   lineHeight: 30,
                 }}/>
        </DialogContent>
      </Dialog>
    )
  }
}

export default VerifyPopUp