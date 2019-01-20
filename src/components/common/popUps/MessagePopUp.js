import React from 'react'
import {Dialog, DialogButton, DialogContent, DialogTitle} from 'react-native-popup-dialog'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import Label from 'src/components/common/Label'


class MessagePopUp extends React.Component<Props, void> {
  render() {
    return (
      <Dialog
        onDismiss={this.props.onDismiss}
        width={0.8}
        visible={this.props.visible}
        rounded
        dialogTitle={
          <DialogTitle
            title={this.props.title}
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
            text={messages.OK}
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
          <Label style={{width: '80%', alignSelf: 'center'}}
                 textStyle={{fontSize: 16, color: COLOR_BLACK}}
                 text={this.props.message}/>

        </DialogContent>
      </Dialog>
    )
  }
}

export default MessagePopUp