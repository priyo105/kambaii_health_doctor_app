
import {Alert, View} from 'react-native'
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import RoundedEditTextWithLabel from './components/RoundedEditTextWithLabel';
import NormalButton from './components/NormalButton';
import ForgetPasswordApi from '../Apps/apis/ForgetPasswordApi';
import Message from '../Apps/utils/Message'

export default function ForgetPassword({navigation}){
  
    const[userName,setUsername]=useState('');
    const[password,setPassword]=useState('');
    return(
      <View>
           
           <Header> </Header>

           <View style={{marginTop:20}}>          
                <RoundedEditTextWithLabel label="Enter Username" onChangeText={(text)=>{setUsername(text)}}></RoundedEditTextWithLabel>

                <RoundedEditTextWithLabel label="Enter Password" onChangeText={(text)=>{setPassword(text)}}></RoundedEditTextWithLabel>

               <NormalButton color="red" text="Update" onPress={()=>{forgetPasswordApi()}}></NormalButton>

           </View>





      </View>
    );


    function forgetPasswordApi(){
        ForgetPasswordApi.forgetPasswordApi(userName,password).then((response)=>{
        
              
            if(response.error=="false"){
                alert("password updated !")
            }else{
                alert(response.msg)
            }
        }
         
        )

    }

}