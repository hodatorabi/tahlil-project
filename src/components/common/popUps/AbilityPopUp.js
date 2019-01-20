import React from 'react'
import {Dialog, DialogButton, DialogContent, DialogTitle} from 'react-native-popup-dialog'
import {Picker, View} from 'react-native'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'


class AbilityPopUp extends React.Component<Props, void> {
  state = {
    selectedAbility: 'پرستاری',
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
              backgroundColor: '#F7F7F8',
            }}
            hasTitleBar={false}
            align="center"
          />
        }
        actions={[
          <DialogButton
            text="انصراف"
            onPress={this.props.onDismiss}
            key="button-1"
            textStyle={{color: COLOR_DARK_GRAY, fontFamily: 'IRANSansMobile_Bold'}}
          />,
          <DialogButton
            text="تایید"
            onPress={this.props.onDismiss}
            key="button-2"
            textStyle={{color: COLOR_BLUE_DEFAULT, fontFamily: 'IRANSansMobile_Bold'}}
          />,
        ]}
      >
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
          }}
        >
          <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', fontFamily: 'IRANSansMobile'}}>
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.selectedAbility}
              style={{height: 100, width: '90%', borderWidth: 1, borderColor: COLOR_BLUE_DEFAULT}}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedAbility: itemValue})}
              itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
              <Picker.Item label='پرستاری' value='پرستاری'/>
              <Picker.Item label='آموزش' value='آموزش'/>
              <Picker.Item label='دامپزشکی' value='دامپزشکی'/>
              <Picker.Item label='روحیه تیمی' value='روحیه تیمی'/>
            </Picker>
          </View>
        </DialogContent>
      </Dialog>
    )
  }
}

export default AbilityPopUp