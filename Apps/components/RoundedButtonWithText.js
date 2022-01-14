import React from "react";
import {View,Image, TouchableOpacity,Text} from "react-native";


 export default function RoundedButtonWithText(props){

     return ( 

       <TouchableOpacity onPress={props.onPress}>    
               <View style={{height:80,width:80,backgroundColor:props.backgroundColor,borderRadius:40,marginTop:20,marginLeft:20} }>                  
                           <Text style={{textAlign:"center",paddingTop:30,fontWeight:"bold"}}>{props.centerText} </Text>
               </View>
               
               <Text style={{marginLeft:39,marginTop:10,color:"black"}}>{props.bottomText}</Text>

       </TouchableOpacity>
     );



 }