import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import PersonalInfoRow from 'src/components/profile/ProfileRow/PersonalInfoRow'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import Label from 'src/components/common/Label'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import ButtonPlus from 'src/components/common/Buttons/ButtonPlus'
import AbilityRow from 'src/components/profile/ProfileRow/AbilityRow'
import {messages} from 'src/utils/messages'


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
                            <ButtonPlus onPress={this.props.onAddPress}/>
                            <Label textStyle={{color: COLOR_BLUE_DEFAULT, fontSize: 20}}
                                   text={messages.ABILITIES}/>
                        </View>
                        <AbilityRow onPress={() => this.props.onRemovePress('پرستاری')} title={'پرستاری'}/>
                        <AbilityRow onPress={() => this.props.onRemovePress('آموزش')} title={'آموزش'}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default PersonalInfo

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