import React, { useEffect,useState } from "react";
import {View,Text,FlatList,ActivityIndicator,Image, TouchableOpacity,ScrollView} from "react-native";
import Header from "./components/Header";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import NormalButton from "./components/NormalButton";
import sendOtpApiCall from '../Apps/apis/ForgetPasswordApi'
export default function OtpView({navigtation}){
 
  const[userName,setUseName]=useState('')

  return(
      <View>
     <Header> </Header>

<View style={{marginTop:20}}>          
     <RoundedEditTextWithLabel label="Enter OPT " onChangeText={(text)=>{setUseName(text)}}></RoundedEditTextWithLabel>


    <NormalButton color="red" text="Send Otp" onPress={()=>{sendOtp()}}></NormalButton>

</View>

      </View>
  )


  function sendOtp(){


    sendOtpApiCall.sendOtp(userName).then((response)=>{
       console.warn("entered here");
        console.warn(response)
    })

  }


}

