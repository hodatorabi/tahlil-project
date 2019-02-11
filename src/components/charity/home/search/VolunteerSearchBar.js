import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_DARK_GRAY, COLOR_DEFAULT_GRAY, COLOR_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import {messages} from 'src/utils/messages'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import CustomButtonWithBorder from 'src/components/common/Buttons/CustomButtonWithBorder'

class VolunteerSearchBar extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.addFilter = this.addFilter.bind(this)
  }

  addFilter() {
    this.props.navigation.navigate('VolunteerFilterPage', {returnToRoute: this.props.navigation.state})
  }


  render() {
    return (
      <View style={style.container}>
        <View style={{flexDirection: 'row'}}>
          <CustomButton style={{marginRight: 30}} label={messages.SEARCH}
                        onPress={() => this.props.onSearch()}/>
          <CustomButtonWithBorder onPress={this.addFilter} label={messages.ADD_FILTER}/>
        </View>

      </View>
    )
  }
}

export default VolunteerSearchBar

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_DEFAULT_GRAY,
    borderWidth: 1,
    width: SCREEN_WIDTH,
  },
  searchBar: {
    width: 0.8 * SCREEN_WIDTH,
    height: 40,
    backgroundColor: COLOR_GRAY,
    fontSize: 14,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
    color: COLOR_BLACK,
    borderRadius: 20,
    paddingRight: 20,
    marginBottom: 30,
  },
  radioButtonLabel: {
    fontSize: 14,
    color: COLOR_DARK_GRAY,
    marginEnd: 20,
    fontFamily: 'IRANSansMobile',
  },
})