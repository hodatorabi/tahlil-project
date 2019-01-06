import React from 'react'
import {Image, ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/ProfileRow/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import CustomButton from 'src/components/common/CustomButton'
import ButtonPlus from 'src/components/common/ButtonPlus'
import AbilityRow from 'src/components/profile/ProfileRow/AbilityRow'
import {DEFAULT_PROFILE_PIC, ICON_STAR} from 'src/assets/styles/icons'


class Profile extends React.Component<Props, State> {

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
              <CustomButton label={'ویرایش'}/>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={'مشخصات فردی'}/>
            </View>

            <PersonalInfoRow description={'هدی'} title={'نام و نام خانوادگی: '}/>
            <PersonalInfoRow description={'تهران'} title={'شهر سکونت: '}/>
            <PersonalInfoRow description={'09394222978'} title={'شماره تماس: '}/>
            <PersonalInfoRow description={'زن'} title={'جنسیت: '}/>
          </View>

          <View style={style.abilitiesContainer}>
            <View style={style.labelStyle}>
              <ButtonPlus/>
              <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                     text={'توانمندی‌ها'}/>
            </View>
            <AbilityRow title={'پرستاری'}/>
            <AbilityRow title={'آموزش'}/>
          </View>
        </ScrollView>
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
    elevation: 1,
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