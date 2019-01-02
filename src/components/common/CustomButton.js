import React from 'react'
import {COLOR_BLUE_DEFAULT} from 'src/assets/styles/colors'
import {Button} from 'react-native-ui-lib'


class CustomButton extends React.Component<Props, void> {

  render() {
    return (
      <Button label={this.props.label}
              backgroundColor={COLOR_BLUE_DEFAULT}
              style={{width: 150}}
              labelStyle={{fontFamily: 'IRANSansMobile'}}
      />
    )
  }
}

export default CustomButton
