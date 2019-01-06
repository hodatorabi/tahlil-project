import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {
  COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_GRAY, COLOR_LIGHT_GRAY,
  COLOR_WHITE,
} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import CustomButton from 'src/components/common/CustomButton'
import ButtonPlus from 'src/components/common/ButtonPlus'


class Profile extends React.Component<Props, State> {

  render() {
    return (
      <View style={style.profileContainer}>

        <View style={style.profilePicContainer}>
          <View style={style.profileAvatar}/>
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
            <PersonalInfoRow title={'پرستاری'}/>
            <PersonalInfoRow title={'آموزش'}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    elevation: 1,
  },
  profileAvatar: {
    width: 0.2 * SCREEN_HEIGHT,
    height: 0.2 * SCREEN_HEIGHT,
    borderRadius: 0.2 * SCREEN_HEIGHT / 2,
    borderColor: COLOR_BLUE_DEFAULT,
    borderWidth: 2,
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