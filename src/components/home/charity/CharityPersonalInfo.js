import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/profileRow/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import {messages} from 'src/utils/messages'


class CharityPersonalInfo extends React.Component<Props, State> {

  render() {
    const charity = this.props.charity
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={style.personalInfoContainer}>
            <View style={style.labelStyle}>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.CHARITY_INFO}/>
            </View>

            <PersonalInfoRow description={charity.name} title={messages.CHARITY_NAME_T}/>
            <PersonalInfoRow description={charity.phoneNumber} title={messages.PHONE_NUMBER}/>
            <PersonalInfoRow description={charity.address} title={messages.ADDRESS}/>
          </View>
          <View style={[style.personalInfoContainer, {
            marginTop: 0.03 * SCREEN_HEIGHT,
          }]}>
            <View style={style.otherInfoContainer}>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.OTHER_INFO}/>
            </View>
            <Label text={charity.description} textStyle={{fontSize: 16, textAlign: 'right', lineHeight: 35}}
                   style={{alignSelf: 'flex-end', paddingVertical: 20}}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default CharityPersonalInfo

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
    justifyContent: 'flex-end',
    width: SCREEN_WIDTH,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
    borderBottomColor: COLOR_DEFAULT_GRAY,
    borderBottomWidth: 1,
  },
  otherInfoContainer: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 0.03 * SCREEN_WIDTH,
    paddingVertical: 0.02 * SCREEN_HEIGHT,
    borderBottomColor: COLOR_DEFAULT_GRAY,
    borderBottomWidth: 1,
    alignItems: 'flex-end',
  },
})