import React from 'react'
import {TextInput, View} from 'react-native'
import {COLOR_DARK_BLUE} from 'src/assets/styles/colors'


class AgreementCheckBox extends React.Component<Props, void> {

  render() {
    const {customInputContainerStyle, customInputStyle, onChangeText} = this.props
    return (
      <View style={[style.containerStyle, customInputContainerStyle]}
      >
        <TextInput
          {...this.props}
          allowFontScaling={false}
          style={[style.inputStyle, customInputStyle]}
          onChangeText={(text) => onChangeText(text)}
          placeholder={this.props.label}
          placeholderTextColor={COLOR_DARK_BLUE}
        />
      </View>
    )
  }
}

export default AgreementCheckBox