import React from 'react'
import {CheckBox, StyleSheet, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'

const fontRatio = 411 / 18


class AgreementCheckBox extends React.Component<Props, void> {

  render() {
    return (
      <View
        style={[style.agreementContainer, this.props.style]}
      >
        <Label text={messages.AGREEMENT_STATEMENT} textStyle={{fontSize: SCREEN_WIDTH / fontRatio}}/>
        <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: SCREEN_WIDTH / fontRatio}} text={messages.RULES}/>
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
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
})