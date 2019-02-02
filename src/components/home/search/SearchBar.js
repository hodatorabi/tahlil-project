import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {
  COLOR_BLACK, COLOR_BLUE_DEFAULT, COLOR_BLUE_TRANSPARENT, COLOR_DARK_GRAY, COLOR_DEFAULT_GRAY,
  COLOR_WHITE,
} from 'src/assets/styles/colors'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import {messages} from 'src/utils/messages'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import CustomButtonWithBorder from 'src/components/common/Buttons/CustomButtonWithBorder'

class SearchBar extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.radioProps = [
      {label: messages.NON_CASH, value: 1},
      {label: messages.CASH, value: 2},
    ]

    this.onRadioSelect = this.onRadioSelect.bind(this)
    this.addFilter = this.addFilter.bind(this)

  }

  state = {
    value: 1,
  }

  onRadioSelect(index) {
    this.setState({value: index})
  }

  addFilter() {
    if (this.state.value === 1)
      this.props.navigation.navigate('NonCashFilterPage')
    else
      this.props.navigation.navigate('CashFilterPage')
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput style={style.searchBar} autoFocus={false}/>
        <RadioForm
          formHorizontal={true}
          initial={0}
          animation={true}
        >
          {this.radioProps.map((obj, i) => {
            return <RadioButton labelHorizontal={true} key={i + 1}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={this.state.value === i + 1}
                onPress={this.onRadioSelect}
                borderWidth={1}
                buttonInnerColor={COLOR_BLUE_DEFAULT}
                buttonOuterColor={COLOR_DARK_GRAY}
                buttonSize={20}
                buttonOuterSize={25}
              />
              <RadioButtonLabel
                obj={obj}
                index={i + 1}
                labelHorizontal={true}
                onPress={this.onRadioSelect}
                labelStyle={style.radioButtonLabel}
              />
            </RadioButton>
          })}

        </RadioForm>

        <View style={{flexDirection: 'row', marginTop: 30,}}>
          <CustomButton style={{marginRight: 30}} label={messages.SEARCH}/>
          <CustomButtonWithBorder onPress={this.addFilter} label={messages.ADD_FILTER}/>
        </View>

      </View>
    )
  }
}

export default SearchBar

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
    backgroundColor: COLOR_BLUE_TRANSPARENT,
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