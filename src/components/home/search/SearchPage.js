import React from 'react'
import {StyleSheet, View} from 'react-native'
import CommonHeader from 'src/components/common/CommonHeader'
import {messages} from 'src/utils/messages'
import SearchBar from 'src/components/home/search/SearchBar'

class SearchPage extends React.Component<Props, State> {


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.SEARCH} hasBack={true} onPress={() => this.props.navigation.goBack('Search')}/>
        <SearchBar navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default SearchPage

const style = StyleSheet.create({})