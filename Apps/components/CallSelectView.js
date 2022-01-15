import React from "react";
import {View,Image,Text,TouchableOpacity,Linking} from "react-native"

import { useNavigation } from '@react-navigation/native';

export default function CallSelectView(props){
       
    const navigation = useNavigation();
    

 return(

    <View style={{flexDirection:"row"}}>
    <TouchableOpacity style={{marginLeft:30}} onPress={()=>{navigation.navigate("ZoomMeeting",{
        meetingUrl:props.meetingUrl})}}>   
        <Image style={{height:50,width:50,resizeMode:"contain",marginRight:10,marginLeft:40,marginTop:20}} source={require("../../assets/video.png")} />
         <Text style={{marginLeft:40,fontSize:14,color:"black",fontWeight:"bold"}}>Video Call</Text>
   </TouchableOpacity>


   <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${props.phoneNumber}`)}}>   
        <Image style={{height:50,width:50,resizeMode:"contain",marginRight:10,marginLeft:40,marginTop:20}} source={require("../../assets/call.png")} />
         <Text style={{marginLeft:40,fontSize:14,color:"black",fontWeight:"bold"}}>Phone Call</Text>       
   </TouchableOpacity>
   
</View> 

 )
 




}