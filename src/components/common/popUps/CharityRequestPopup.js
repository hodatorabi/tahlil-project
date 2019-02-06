import React from 'react'
import {Dialog, DialogButton, DialogContent, DialogTitle} from 'react-native-popup-dialog'
import {COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import Label from 'src/components/common/Label'
import {Picker, TextInput} from 'react-native'
import Projects from 'src/store/projects'


class CharityRequestPopup extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.state = {
      message: '',
      selectedProject: -1
    }

    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(value) {
    this.setState({message: value})
  }

  render() {
    return (
      <Dialog
        onDismiss={this.props.onDismiss}
        width={0.8}
        visible={this.props.visible}
        rounded
        dialogTitle={
          <DialogTitle
            title={messages.SEND_REQUEST_TO_VOLUNTEER}
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
            onPress={() => {
              this.props.onSend(this.state.message, this.state.selectedProject)
              this.props.onDismiss()
            }}
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
          <Label style={{marginTop: -10, marginBottom: 20, width: '90%', alignSelf: 'center'}}
                 textStyle={{fontSize: 16, color: COLOR_BLACK}}
                 text={messages.CHOOSE_PROJECT}/>

          <Picker
            mode={'dropdown'}
            selectedValue={this.state.selectedProject}
            style={{height: 50, width: '80%', borderWidth: 1, borderColor: COLOR_BLUE_DEFAULT, alignSelf: 'center'}}
            onValueChange={(itemValue, itemIndex) => itemValue !== -1 ? this.setState({selectedProject: itemValue}) : null}
            itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
            <Picker.Item label={'انتخاب کنید'} value={-1}/>
            {this.props.charityNonCashProjects.map((item, index) => (
              <Picker.Item label={item.name} value={item.id}/>
            ))}
          </Picker>

          <Label style={{marginTop: 10, marginBottom: 20, width: '95%', alignSelf: 'center'}}
                 textStyle={{fontSize: 16, color: COLOR_BLACK}}
                 text={messages.REQUEST_MESSAGE}/>
          <TextInput multiline={true}
                     onChangeText={(text) => this.onChangeText(text)}
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

export default Projects.providers.projects(CharityRequestPopup)