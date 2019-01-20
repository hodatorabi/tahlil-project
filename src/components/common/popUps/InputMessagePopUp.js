import React from 'react'
import {Dialog, DialogButton, DialogContent, DialogTitle} from 'react-native-popup-dialog'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import Label from 'src/components/common/Label'
import {TextInput} from 'react-native'


class InputMessagePopUp extends React.Component<Props, void> {
  render() {
    return (
      <Dialog
        onDismiss={this.props.onDismiss}
        width={0.8}
        visible={this.props.visible}
        rounded
        dialogTitle={
          <DialogTitle
            title={messages.SEND_REQUEST}
            textStyle={{fontFamily: 'IRANSansMobile_Bold', color: COLOR_BLUE_DEFAULT}}
            style={{
              backgroundColor: '#ffffff',
            }}
            hasTitleBar={false}
            align="center"
          />
        }
        actions={[
          <DialogButton
            text={messages.CANCEL}
            onPress={this.props.onDismiss}
            key="button-1"
            textStyle={{color: COLOR_DARK_GRAY, fontFamily: 'IRANSansMobile_Bold'}}
          />,
          <DialogButton
            text={messages.SEND}
            onPress={this.props.onDismiss}
            key="button-2"
            textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
          />,
        ]}
      >
        <DialogContent
          style={{
            backgroundColor: '#ffffff',
          }}
        >
          <Label style={{marginTop: -10, marginBottom: 20, width: '80%', alignSelf: 'center'}}
                 textStyle={{fontSize: 16, color: COLOR_BLACK}}
                 text={messages.REQUEST_MESSAGE}/>
          <TextInput multiline={true}
                     style={{
                       backgroundColor: COLOR_WHITE,
                       height: 100,
                       borderRadius: 10,
                       fontFamily: 'IRANSansMobile',
                       alignItems: 'flex-start',
                       textAlign: 'right',
                       fontSize: 16,
                       borderWidth: 0.5,
                     }}/>
        </DialogContent>
      </Dialog>
    )
  }
}

export default InputMessagePopUp