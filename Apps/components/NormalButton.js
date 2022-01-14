import React from "react";
import {StyleSheet,TouchableOpacity,Text} from 'react-native';


export default function NormalButton(props){


  return (
         <TouchableOpacity style={{alignItems:'center',marginTop:25}} onPress={props.onPress} >
          <Text style={[style.roundedButtonStyle,{backgroundColor:props.color}]} >{props.text}</Text>      
       </TouchableOpacity>    
    )
}


const style=   StyleSheet.create({
     
     roundedButtonStyle:{
        width:100,
        backgroundColor:'#59d3b9',
        height:40,
        color:'#9cf7ed',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:10,
       fontSize:12

     }


});