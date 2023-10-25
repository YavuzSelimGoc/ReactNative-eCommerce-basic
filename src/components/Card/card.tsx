import React from "react";
import { View,Text,TouchableOpacity,StyleSheet, Alert } from "react-native";
import Styles from './card_style'

const Message = () =>{
Alert.alert('E zATEN')
}
const Card = (props) =>  {
  
    return(
        <View style={Styles.card_Container}>
        <View style={Styles.card_Body}>
        <Text style={Styles.card_title}>{props.title}</Text>
        <Text style={Styles.card_text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={Styles.card_button_container} onPress={Message}>
          <Text style={Styles.card_button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    );
} 
export default Card