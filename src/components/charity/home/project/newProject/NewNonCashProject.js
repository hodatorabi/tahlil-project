import React from 'react'
import {Picker, ScrollView, StyleSheet, TextInput, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import {COLOR_DARK, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import Label from 'src/components/common/Label'
import {toArray} from 'src/utils/dictionary'
import Auth from 'src/store/auth'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import AbilityRow from 'src/components/profile/profileRow/AbilityRow'
import {abilityIDToName} from 'src/utils/farsiUtils'


class NewNonCashProject extends React.Component<Props, void> {

  constructor(props) {
    super(props)

    this.onAddAbility = this.onAddAbility.bind(this)
  }

  state = {
    selectedGender: 0,
    selectedAbility: 1,
    selectedAbilities: [],
  }

  onAddAbility() {
    this.setState({selectedAbilities: [...this.state.selectedAbilities, this.state.selectedAbility]})
  }

  onRemoveAbility(id) {
    let arr = this.state.selectedAbilities
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === id) {
        arr.splice(i, 1)
        break
      }
    }
    this.setState({selectedAbilities: arr})
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <CommonHeader title={messages.CREATE_NON_CASH} hasBack={true} onPress={() => this.props.navigation.goBack()}/>
        <ScrollView>
          <View style={[style.itemContainerStyle, {marginTop: 0.02 * SCREEN_HEIGHT}]}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_NAME}/>
            <TextInput style={style.itemTextStyle} maxLength={30}/>
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.VOLUNTEER_GENDER}/>
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.selectedGender}
              style={{height: 50, width: 250}}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedGender: itemValue})}
              itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
              <Picker.Item label=' هر دو' value={0}/>
              <Picker.Item label=' زن' value={1}/>
              <Picker.Item label=' مرد' value={2}/>
            </Picker>
          </View>
          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.VOLUNTEER_AGE}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput style={[style.itemTextStyle, {width: 40}]}/>
              <Label text={' تا '}/>
              <TextInput style={[style.itemTextStyle, {width: 40}]}/>
              <Label text={'از '}/>
            </View>
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_LOCATION}/>
            <TextInput style={style.itemTextStyle}/>
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.VOLUNTEER_ABILITIES}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ButtonPlus
                tintColor={COLOR_DARK}
                onPress={this.onAddAbility}/>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.selectedAbility}
                style={{height: 50, width: 250}}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({selectedAbility: itemValue})
                }}
                itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
                {toArray(this.props.abilities).map((item, index) => (
                  <Picker.Item label={' ' + item[1]['name']} value={item[0]}/>
                ))}
              </Picker>
            </View>
            {this.state.selectedAbilities.map((item, index) => (
              <AbilityRow onPress={() => this.onRemoveAbility(item)} style={{width: 0.9 * SCREEN_WIDTH}}
                          title={abilityIDToName(item, this.props.abilities)}/>
            ))}
          </View>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.PROJECT_DESCRIPTION}/>
            <TextInput style={style.itemTextStyle} multiline={true}/>
          </View>
        </ScrollView>
      </View>

    )
  }
}

export default Auth.providers.auth(NewNonCashProject)

const style = StyleSheet.create({
  itemContainerStyle: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 40,
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.95,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLOR_WHITE,
    elevation: 1,
  },
  itemTextStyle: {
    width: 250,
    fontSize: 16,
    borderBottomWidth: 1,
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
  },
})