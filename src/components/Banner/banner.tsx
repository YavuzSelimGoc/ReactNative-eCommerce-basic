import React from "react";
import { ScrollView } from "react-native";
const Banner = () =>{
    return(
<ScrollView horizontal showsVerticalScrollIndicator={false}>
          {news_banner_data.map(bannerNews => (<Image style={Styles.banner_Images} source={{ uri: bannerNews.imageUrl }} />))}
        </ScrollView  >
    )
}
export default Banner