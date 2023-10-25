import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e0e0e0',
        margin:10,
        borderRadius:15,
        width:Dimensions.get('window').width/2,
        height:Dimensions.get('window').height/2.9,
      
    },
    Image:{
        width:Dimensions.get('window').width/3,
        height:Dimensions.get('window').height/6,
       resizeMode: 'stretch',

    },
    Title:{
        fontWeight:'bold',
        fontSize:20,
       margin:5,
       textAlign:'center'
    },
    Price:{
        margin:5,
        color:'#858585',
        fontSize:20,
      textAlign:'left',
      fontWeight:'bold'

    },
    Product_inStock:{
        fontSize:16,
        fontWeight:"bold",
        color:"red",
        paddingLeft:7,
        paddingRight:7,
    },

    ImageContainer:{
        
        backgroundColor:'white',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        width:Dimensions.get('window').width/2.5,
        height:Dimensions.get('window').height/5,
       marginLeft:10,
       marginTop:20,
     
    }
})