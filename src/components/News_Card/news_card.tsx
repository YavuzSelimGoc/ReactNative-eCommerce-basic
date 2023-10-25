import React from "react";
import { View,Image, Text } from "react-native";
import Styles from './news_card_style'
const newsCard = ({news}) =>{
    
    return(
        <View style={Styles.Component}> 
        <Image source={{uri:news.imageUrl}} style={Styles.Image}/>
        <View style={Styles.innerContainer}>
        <Text style={Styles.Title}>{news.title}</Text>
        <Text style={Styles.Description}>{news.description}</Text>
        <Text style={Styles.Author}>{news.author}</Text>
        </View>
        </View>

    );
}
export default newsCard