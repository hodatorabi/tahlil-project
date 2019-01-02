import React from 'react'
import {View} from 'react-native'
import TextField from 'react-native-material-textfield/src/components/field/index'
import {COLOR_DARK_GRAY} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'


class CustomInput extends React.Component<Props, void> {

  render() {
    const {customInputContainerStyle, customInputStyle, onChangeText} = this.props
    return (
      <View style={{width: SCREEN_WIDTH}}
      >
        <TextField
          {...this.props}
          allowFontScaling={false}
          containerStyle={{
            width: 0.9 * SCREEN_WIDTH,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontFamily: 'IRANSansMobile',
            borderColor: COLOR_DARK_GRAY,
            borderWidth:1
          }}
          inputContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'IRANSansMobile',
          }}
          style={{textAlign: 'right', fontFamily: 'IRANSansMobile'}}
          onChangeText={(text) => onChangeText(text)}
          caretHidden={false}
          fontSize={18}
          textColor={COLOR_DARK_GRAY}
          label={'نام کاربری'}
        />

      </View>
    )
  }
}

export default CustomInput
