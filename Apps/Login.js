import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View,Text,TouchableOpacity} from 'react-native'
import Header from "./components/Header";
import RoundedButton from "./components/RoundedButton";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import Message from '../Apps/utils/Message';
import  LoginApi from '../Apps/apis/LoginApi';
import UserData from '../Apps/database/UserData';


export default function Login ({navigation}){
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  return(
      <SafeAreaView>
          
           <Header> </Header>

           <View style={{marginTop:30}}>
              <RoundedEditTextWithLabel label="User Name" placeholder="Enter User Name" onChangeText={(text)=>{setUserName(text)}}></RoundedEditTextWithLabel>
              <RoundedEditTextWithLabel label="Password" placeholder="Enter Password" secureTextEntry={true} onChangeText={(text)=>{setPassword(text)}} ></RoundedEditTextWithLabel>
            
             <TouchableOpacity onPress={()=>{navigation.navigate("ForgetPassword")}}>
              <Text style={{textAlign:"right",marginRight:40,marginTop:10,fontWeight:"bold"}}>Forget Password</Text>
              </TouchableOpacity> 
              <RoundedButton text="Login" color="#01b0f1" onPress={onLoginBtnPress}></RoundedButton>
           </View> 

      </SafeAreaView>
  )


  function onLoginBtnPress(){
  
     if(!userName){
        alert('UserName is Empty')
      }else{

        LoginApi.fetchLoginData(userName,password).then(response=>{
        
           Message.notifyMessage(response.msg)

           if(response.error==false){
              let accessToken=response.data.jwt_token[0].original.access_token; // ACCESS TOKEN 
              global.token=accessToken
              UserData.setUserData(response.data.name, accessToken );
              navigation.navigate("DoctorHome");
           }

        })

      }

  }





}

