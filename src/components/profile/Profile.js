import React from 'react'
import {Image, ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/ProfileRow/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import AbilityRow from 'src/components/profile/ProfileRow/AbilityRow'
import {DEFAULT_PROFILE_PIC, ICON_STAR} from 'src/assets/styles/icons'
import {messages} from 'src/utils/messages'
import AbilityPopUp from 'src/components/common/popUps/AbilityPopUp'
import VerifyPopUp from 'src/components/common/popUps/VerifyPopUp'


class Profile extends React.Component<Props, State> {

  state = {
    addAbilityPopUpVisible: false,
    removeAbilityPopUpVisible: false,
  }

  render() {
    return (
      <View style={style.profileContainer}>

        <View style={style.profilePicContainer}>
          <View style={style.profileAvatar}>
            <Image source={DEFAULT_PROFILE_PIC} style={{
              height: 0.178 * SCREEN_HEIGHT,
              width: 0.178 * SCREEN_HEIGHT,
              borderRadius: 0.178 * SCREEN_HEIGHT / 2,
            }}/>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={ICON_STAR} style={{width: 25, height: 25, resizeMode: 'contain'}}/>
            <Image source={ICON_STAR} style={{width: 25, height: 25, resizeMode: 'contain'}}/>
            <Image source={ICON_STAR} style={{width: 25, height: 25, resizeMode: 'contain'}}/>
            <Image source={ICON_STAR} style={{width: 25, height: 25, resizeMode: 'contain'}}/>
            <Image source={ICON_STAR} style={{width: 25, height: 25, resizeMode: 'contain'}}/>
            <Label style={{marginLeft: 5}} textStyle={{fontSize: 16}} text={'امتیاز شما:'}/>
          </View>
        </View>

        <ScrollView contentContainerStyle={style.scrollContainer}>

          <View style={style.personalInfoContainer}>
            <View style={style.labelStyle}>
              <CustomButton label={messages.EDIT}/>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.PERSONAL_INFO}/>
            </View>

            <PersonalInfoRow description={'هدی'} title={messages.FULL_NAME}/>
            <PersonalInfoRow description={'تهران'} title={messages.CITY}/>
            <PersonalInfoRow description={'09394222978'} title={messages.PHONE_NUMBER}/>
            <PersonalInfoRow description={'زن'} title={messages.GENDER}/>
          </View>

          <View style={style.abilitiesContainer}>
            <View style={style.labelStyle}>
              <ButtonPlus onPress={() => this.setState({addAbilityPopUpVisible: true})}/>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={messages.ABILITIES}/>
            </View>
            <AbilityRow onPress={() => this.setState({removeAbilityPopUpVisible: true})} title={'پرستاری'}/>
            <AbilityRow onPress={() => this.setState({removeAbilityPopUpVisible: true})} title={'آموزش'}/>
          </View>
        </ScrollView>

        <AbilityPopUp visible={this.state.addAbilityPopUpVisible}
                      onDismiss={() => this.setState({addAbilityPopUpVisible: false})}/>
        <VerifyPopUp visible={this.state.removeAbilityPopUpVisible}
                     verifyText={messages.REMOVE_ABILITY}
                     onDismiss={() => this.setState({removeAbilityPopUpVisible: false})}/>
      </View>
    )
  }
}

export default Profile

const style = StyleSheet.create({
  profileContainer: {
    flex: 1, justifyContent: 'flex-start', alignItems: 'center',
  },
  profilePicContainer: {
    width: SCREEN_WIDTH,
    height: 0.3 * SCREEN_HEIGHT,
    alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE,
    // elevation: 1,
    paddingHorizontal: 0.07 * SCREEN_WIDTH,
  },
  profileAvatar: {
    width: 0.2 * SCREEN_HEIGHT,
    height: 0.2 * SCREEN_HEIGHT,
    borderRadius: 0.2 * SCREEN_HEIGHT / 2,
    borderColor: COLOR_BLUE_DEFAULT,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {paddingVertical: 0.03 * SCREEN_HEIGHT,},
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