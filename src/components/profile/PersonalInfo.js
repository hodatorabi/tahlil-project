import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/profileRow/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import AbilityRow from 'src/components/profile/profileRow/AbilityRow'
import {messages} from 'src/utils/messages'
import Auth from '../../store/auth'
import {toFarsiGender} from '../../utils/farsiUtils'


class PersonalInfo extends React.Component<Props, State> {

  state = {
    addAbilityPopUpVisible: false,
    removeAbilityPopUpVisible: false,
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={style.personalInfoContainer}>
            <View style={[style.labelStyle, {justifyContent: 'flex-end'}]}>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.PERSONAL_INFO}/>
            </View>

            <PersonalInfoRow description={this.props.volunteer.name} title={messages.FULL_NAME}/>
            <PersonalInfoRow description={this.props.volunteer.city} title={messages.CITY}/>
            <PersonalInfoRow description={this.props.volunteer.phoneNumber} title={messages.PHONE_NUMBER}/>
            <PersonalInfoRow description={toFarsiGender(this.props.volunteer.gender)} title={messages.GENDER}/>
            <PersonalInfoRow description={this.props.volunteer.age} title={messages.AGE}/>
          </View>

          <View style={style.abilitiesContainer}>
            <View style={style.labelStyle}>
              <ButtonPlus onPress={this.props.onAddPress}/>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.ABILITIES}/>
            </View>
            {this.props.volunteer.abilities && this.props.volunteer.abilities.map((item, index) => (
              <AbilityRow onPress={() => this.props.onRemovePress(item)} title={this.props.abilities[item]['name']}/>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(PersonalInfo)

const style = StyleSheet.create({
  scrollContainer: {paddingVertical: 0.02 * SCREEN_HEIGHT,},
  personalInfoContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    elevation: 1,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
  },
  abilitiesContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    marginTop: 0.03 * SCREEN_HEIGHT,
    elevation: 1,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
  },
  labelStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
    borderBottomColor: COLOR_DEFAULT_GRAY,
    borderBottomWidth: 1,
  },
})