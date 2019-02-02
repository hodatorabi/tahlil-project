import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/profileRow/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import AbilityRow from 'src/components/profile/profileRow/AbilityRow'
import {messages} from 'src/utils/messages'
import {toFarsiGender} from 'src/utils/farsiUtils'
import Auth from 'src/store/auth'
import CustomButton from 'src/components/common/Buttons/CustomButton'


class VolunteerPersonalInfo extends React.Component<Props, State> {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={style.personalInfoContainer}>
            <View style={style.labelStyle}>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.PERSONAL_INFO}/>
            </View>

            <PersonalInfoRow description={this.props.person.name} title={messages.FULL_NAME}/>
            <PersonalInfoRow description={this.props.person.city} title={messages.CITY}/>
            <PersonalInfoRow description={this.props.person.phoneNumber} title={messages.PHONE_NUMBER}/>
            <PersonalInfoRow description={toFarsiGender(this.props.person.gender)} title={messages.GENDER}/>
            <PersonalInfoRow description={this.props.person.age} title={messages.AGE}/>
          </View>

          <View style={style.abilitiesContainer}>
            <View style={style.labelStyle}>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.ABILITIES}/>
            </View>
            {this.props.person.abilities && this.props.person.abilities.map((item, index) => (
              <AbilityRow noButton={true} title={this.props.abilities[item]['name']}/>
            ))}
          </View>

          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50, marginTop: 30}}
                        onPress={this.props.onPressButton}
                        label={messages.SEND_REQUEST_TO_VOLUNTEER}
                        labelStyle={{fontSize: 20}}
          />
        </ScrollView>
      </View>
    )
  }
}

export default Auth.providers.auth(VolunteerPersonalInfo)

const style = StyleSheet.create({
  scrollContainer: {paddingVertical: 0.02 * SCREEN_HEIGHT, alignItems: 'center',},
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
    justifyContent: 'flex-end',
    width: SCREEN_WIDTH,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
    borderBottomColor: COLOR_DEFAULT_GRAY,
    borderBottomWidth: 1,
  },
})