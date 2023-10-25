import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    Container:{
      

    },
    Title:{
        
        fontSize:18,
        fontWeight:"bold",
        marginBottom:5,
        textAlign:'center'
    },
    Author:{
    textAlign:'right',
    fontStyle:'italic',
    marginTop:8
    },
    Image:{
        height:Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10

    },
    innerContainer:{
        padding:8

    },
    Component:{
        flex:1,
        backgroundColor:'white',
        margin:15,
        borderRadius:15
    },
    Description:{
        marginTop:5,
        textAlign:'center'
    },
})