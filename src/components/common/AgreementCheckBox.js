import React from 'react'
import {CheckBox, StyleSheet, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'


class AgreementCheckBox extends React.Component<Props, void> {

  render() {
    return (
      <View
        style={[style.agreementContainer, this.props.style]}
      >
        <Label text={messages.AGREEMENT_STATEMENT}/>
        <Label textStyle={{color: COLOR_BLUE_DEFAULT}} text={messages.RULES}/>
        <CheckBox
          value={this.props.checked}
          onValueChange={() => this.props.onValueChange()}
        />
      </View>
    )
  }
}

export default AgreementCheckBox

const style = StyleSheet.create({
  agreementContainer: {
    flexDirection: 'row', alignItems: 'center', width: 0.8 * SCREEN_WIDTH,
  },
})