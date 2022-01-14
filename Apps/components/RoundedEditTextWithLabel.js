import React from "react";
import { TextInput,View,StyleSheet,Text} from "react-native";


export default function RoundedEditTextWithLabel(props){
   return(     
       <View>              
              <Text style={style.labelStyle}> {props.label} </Text>
              <TextInput height="100"   autoCapitalize='none' style={style.textinput} placeholder={props.placeholder}  keyboardType={props.keyboardType} secureTextEntry={props.secureTextEntry} onChangeText={props.onChangeText}></TextInput>
       </View>
   );

}


const style=StyleSheet.create({
    textinput:{
      marginHorizontal:20,
      marginVertical:5,
      height:40,
      paddingLeft:30,
      borderRadius:20,
      borderColor:'#000',
      borderWidth:1
    },

    labelStyle:{
      marginLeft:30,
      marginTop:10,
      color:'black',
      fontSize:12
    }



})