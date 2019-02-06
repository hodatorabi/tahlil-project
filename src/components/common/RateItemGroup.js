import React from 'react'
import {StyleSheet, View} from 'react-native'
import {COLOR_BLUE_DEFAULT, COLOR_WHITE} from 'src/assets/styles/colors'
import RateItemButton from 'src/components/common/RateItemButton'

const ratings = [1, 2, 3, 4, 5]

class RateItemGroup extends React.Component<Props, State> {

  state = {
    chosenRating: 0,
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
        {ratings.map((item, index) => (
          <RateItemButton
            onPress={() => {
              this.setState({chosenRating: item}, () => this.props.onChangeValue(this.state.chosenRating))
            }}
            rating={item}
            style={{marginRight: item !== 5 ? 10 : 0}}
            fontColor={item <= this.state.chosenRating ? COLOR_WHITE : COLOR_BLUE_DEFAULT}
            backgroundColor={item <= this.state.chosenRating ? COLOR_BLUE_DEFAULT : COLOR_WHITE}/>
        ))}
      </View>
    )
  }
}

export default RateItemGroup

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderColor: COLOR_BLUE_DEFAULT,
    borderWidth: 1
  },
})