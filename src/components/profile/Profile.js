import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_BLUE, COLOR_DEFAULT_GRAY, COLOR_WHITE,} from 'src/assets/styles/colors'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {messages} from 'src/utils/messages'
import PersonalInfo from 'src/components/profile/PersonalInfo'
import AbilityPopUp from 'src/components/common/popUps/AbilityPopUp'
import VerifyPopUp from 'src/components/common/popUps/VerifyPopUp'

const FirstRoute = (onAddPress, onRemovePress) => (
    <PersonalInfo onAddPress={onAddPress} onRemovePress={onRemovePress}/>
)
const SecondRoute = () => (
    <View/>
)

const ThirdRoute = () => (
    <View/>
)

class Profile extends React.Component<Props, State> {

    state = {
        addAbilityPopUpVisible: false,
        removeAbilityPopUpVisible: false,
        index: 2,
        routes: [
            {key: 'first', title: messages.INFO},
            {key: 'second', title: messages.FEEDBACK},
            {key: 'third', title: messages.SCHEDULE},
        ],
    }
    onPressAddAbility = () => {
        this.setState({addAbilityPopUpVisible: true})
    }
    onPressRemoveAbility = (item) => {
        console.log(item)
        this.setState({removeAbilityPopUpVisible: true})
    }

    constructor(props) {
        super(props)

        this.onPressAddAbility = this.onPressAddAbility.bind(this)
        this.onPressRemoveAbility = this.onPressRemoveAbility.bind(this)
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <View style={{width: SCREEN_WIDTH, height: 0.2 * SCREEN_HEIGHT, borderWidth: 1}}/>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: ThirdRoute,
                        second: SecondRoute,
                        third: () => FirstRoute(this.onPressAddAbility, this.onPressRemoveAbility),
                    })}
                    onIndexChange={index => this.setState({index})}
                    initialLayout={{width: SCREEN_WIDTH}}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            style={{
                                backgroundColor: COLOR_WHITE,
                                elevation: 0,
                                borderBottomColor: COLOR_DEFAULT_GRAY,
                                borderBottomWidth: 0.5
                            }}
                            indicatorStyle={{backgroundColor: COLOR_BLUE_DEFAULT}}
                            labelStyle={{color: COLOR_DARK_BLUE, fontFamily: 'IRANSansMobile'}}
                        />
                    }
                />
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
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    profileHeaderStyle: {
        width: SCREEN_WIDTH,
        backgroundColor: COLOR_WHITE,
        height: 0.3 * SCREEN_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profileAvatar: {
        height: 0.2 * SCREEN_HEIGHT,
        width: 0.2 * SCREEN_HEIGHT,
        borderRadius: 20,
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