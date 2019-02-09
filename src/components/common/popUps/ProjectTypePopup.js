import React from 'react'
import {Dialog, DialogButton, DialogContent} from 'react-native-popup-dialog'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import Label from 'src/components/common/Label'
import {Picker} from 'react-native'


class ProjectTypePopup extends React.Component<Props, void> {

  state = {
    selectedProjectType: 0,
  }

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
            onPress={() => this.props.onVerify(this.state.selectedProjectType)}
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
                   marginBottom: 20,
                 }}/>
          <Picker
            mode={'dropdown'}
            selectedValue={this.state.selectedProjectType}
            style={{height: 50, width: '80%', borderWidth: 1, borderColor: COLOR_BLUE_DEFAULT, alignSelf: 'center'}}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedProjectType: itemValue})}
            itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
            <Picker.Item label={messages.NON_CASH} value={0}/>
            <Picker.Item label={messages.CASH} value={1}/>
          </Picker>
        </DialogContent>
      </Dialog>
    )
  }
}

export default ProjectTypePopup