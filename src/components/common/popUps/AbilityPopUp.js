import React from 'react'
import {Dialog, DialogButton, DialogContent, DialogTitle} from 'react-native-popup-dialog'
import {Picker, View} from 'react-native'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_WHITE} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import Auth from '../../../store/auth'
import {toArray} from '../../../utils/dictionary'


class AbilityPopUp extends React.Component<Props, void> {
  state = {
    selectedAbility: '',
  }

  componentDidMount(): void {
    console.log(toArray(this.props.abilities))
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
            title={messages.CHOOSE_ABILITY}
            textStyle={{fontFamily: 'IRANSansMobile'}}
            style={{
              backgroundColor: COLOR_WHITE,
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
            text={messages.VERIFY}
            onPress={this.props.onDismiss}
            key="button-2"
            textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
          />,
        ]}
      >
        <DialogContent
          style={{
            backgroundColor: COLOR_WHITE,
          }}
        >
          <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', fontFamily: 'IRANSansMobile'}}>
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.selectedAbility}
              style={{height: 100, width: '90%', borderWidth: 1, borderColor: COLOR_BLUE_DEFAULT}}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedAbility: itemValue})}
              itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
              {toArray(this.props.abilities).map((item, index) => (
                <Picker.Item label={' ' + item[1]['name']} value={item[1]['id']}/>
              ))}
            </Picker>
          </View>
        </DialogContent>
      </Dialog>
    )
  }
}

export default Auth.providers.auth(AbilityPopUp)