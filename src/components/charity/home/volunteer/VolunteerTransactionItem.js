import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLACK, COLOR_WHITE} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {DEFAULT_PROFILE_PIC} from 'src/assets/styles/icons'


class VolunteerTransactionItem extends React.Component<Props, State> {

  render() {
    const transaction = this.props.transaction
    return (
      <TouchableOpacity onPress={this.props.onPress} style={style.overviewContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Label text={transaction.amount + ' تومان'}/>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Label text={transaction.volunteer.name}
                   textStyle={{fontSize: 16, color: COLOR_BLACK}}
                   style={{marginRight: 10}}/>
            <Image source={DEFAULT_PROFILE_PIC}
                   style={{width: 45, height: 45, borderRadius: 22.5}}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default VolunteerTransactionItem

const style = StyleSheet.create({
  overviewContainer: {
    width: 0.95 * SCREEN_WIDTH,
    backgroundColor: COLOR_WHITE,
    marginBottom: 0.015 * SCREEN_HEIGHT,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
    paddingHorizontal: 15,
    alignSelf: 'center',
    elevation: 1,
  },
})