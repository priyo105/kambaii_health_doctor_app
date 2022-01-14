 import React from "react";
 import {View,Image, TouchableOpacity} from "react-native";


  export default function RoundedIcon(props){



      return ( 

        <TouchableOpacity onPress={props.onPress}>    
                <View style={{height:50,width:50,backgroundColor:props.backgroundColor,borderRadius:30,marginTop:20,marginLeft:20} }>                  
                            <Image style={{height:30,width:30,resizeMode:'contain',alignSelf:'center',paddingTop:30,marginTop:10}} source={props.source}></Image>
                </View>
        </TouchableOpacity>
      );



  }