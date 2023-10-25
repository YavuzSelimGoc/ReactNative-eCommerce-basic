import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Button, ScrollView, Image, Alert, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import News_Card from './components/News_Card';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json'

const App = () => {
  const renderNews = ({ item }) => <News_Card news={item} />




  const Styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },
    banner_Images: {
      height: Dimensions.get('window').height / 5,
      width: Dimensions.get('window').width / 1.5,
      marginLeft: 10
    },
    HeaderText: {
      fontWeight:'bold',
      fontSize:50
    }
  })
  return (
    <SafeAreaView style={Styles.Container}>
      <Text style={Styles.HeaderText}>
        NEWS
      </Text>
      <FlatList ListHeaderComponent={() => (
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          {news_banner_data.map(bannerNews => (<Image style={Styles.banner_Images} source={{ uri: bannerNews.imageUrl }} />))}
        </ScrollView  >
      )}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>

  );
};
export default App