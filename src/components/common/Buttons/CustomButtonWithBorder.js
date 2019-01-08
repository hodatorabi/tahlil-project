import React from 'react'
import {COLOR_BLUE_DEFAULT, COLOR_WHITE} from 'src/assets/styles/colors'
import {Button} from 'react-native-ui-lib'


class CustomButtonWithBorder extends React.Component<Props, void> {

  render() {
    return (
      <Button
        {...this.props}
        label={this.props.label}
        backgroundColor={COLOR_WHITE}
        style={[{borderColor: COLOR_BLUE_DEFAULT, borderWidth: 2}, this.props.style]}
        labelStyle={{fontFamily: 'IRANSansMobile', color: COLOR_BLUE_DEFAULT}}
      />
    )
  }
}

export default CustomButtonWithBorder
