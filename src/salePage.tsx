import React from 'react'
import { SafeAreaView, Text, View,TextInput, StyleSheet, Button, ScrollView, Image, Alert, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import News_Card from './components/News_Card';
import PhoneCard from './components/phoneCard';
import news_data from './news_data.json';

import { useState,useEffect } from 'react';

import news_banner_data from './news_banner_data.json'
import technology_market_data from './technology_market.json'

const App = () => {

  //const renderNews = ({ item }) => <News_Card news={item} />
  const renderMarketData = ({item}) => <PhoneCard data={item}/>
  const [searchText, setSearchText] = useState('');
  const filteredData = technology_market_data.filter(item => item.title.includes(searchText));
  



  const Styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: 'white',
    },
    banner_Images: {
      height: Dimensions.get('window').height / 5,
      width: Dimensions.get('window').width / 1.5,
      marginLeft: 10
    },
    HeaderText: {
      fontWeight:'bold',
      fontSize:50
    }, TextInputStyles: {
      height:40,
      borderWidth:1,
      paddingLeft:20,
      margin:5,
      borderColor:'#009688',
      backgroundColor:'white',
      borderRadius:10,
      fontSize:22,
      width:Dimensions.get('window').width/1.12,
    marginLeft:20
    }
  })
//   ListHeaderComponent={() => (
//     <ScrollView horizontal showsVerticalScrollIndicator={false}>
//       {news_banner_data.map(bannerNews => (<Image style={Styles.banner_Images} source={{ uri: bannerNews.imageUrl }} />))}
//     </ScrollView  >
//   )}

  return (
    <SafeAreaView style={Styles.Container}>
        <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        style={Styles.TextInputStyles}
      />
   
      <FlatList 
       numColumns={2}
        data={filteredData}
        renderItem={renderMarketData}
      />
      
    </SafeAreaView>

  );
};
export default App