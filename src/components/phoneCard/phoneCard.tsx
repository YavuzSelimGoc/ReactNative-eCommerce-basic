import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Styles from "./phoneCard_style"
const PhoneCard = ({data}) =>{
    return(
        <View style={Styles.container}>
             <View style={Styles.ImageContainer} >
<Image style={Styles.Image} source={{uri:data.imgURL}}/>
        </View>
        <Text numberOfLines={2} style={Styles.Title} >{data.title}</Text>
        <Text style={Styles.Price} >{data.price}</Text>
        <Text style={Styles.Product_inStock}>{data.inStock ?  "" : "STOKTA YOK"} </Text>

        </View>
       


    )
}
export default PhoneCard