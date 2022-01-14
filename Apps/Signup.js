import React, { useState } from "react";
import { ScrollView, Text ,View,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import RoundedButton from "./components/RoundedButton";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import Message from "./utils/Message";
import RegistrationApi from '../Apps/apis/RegistrationApi';


export default function Signup({navigation}){

       const[fname,setFname]=useState('');
       const[lname,setLname]=useState('');
       const[mobileNo,setMobileNo]=useState('');
       const[password,setPassword]=useState('');
       const[confirmpassword,setconfirmPassword]=useState('');
       const[email,setEmail]=useState('');


       return(   
        <SafeAreaView>        
          <ScrollView>
            <Image  source={require('../assets/logo.png')} style={{alignSelf:"center",marginTop:20}}/>

           <RoundedEditTextWithLabel label="First Name" placeholder="Enter First Name" onChangeText={(text)=>{setFname(text)}}></RoundedEditTextWithLabel>
           <RoundedEditTextWithLabel label="Last Name" placeholder="Enter Last Name" onChangeText={(text)=>{setLname(text)}}></RoundedEditTextWithLabel>
           <RoundedEditTextWithLabel label="Mobile" placeholder="Enter Mobile No" keyboardType="numeric" onChangeText={(text)=>{setMobileNo(text)}}></RoundedEditTextWithLabel>
           <RoundedEditTextWithLabel label="Email" placeholder="Enter Email"  onChangeText={(text)=>{setEmail(text)}}></RoundedEditTextWithLabel>
           <RoundedEditTextWithLabel label="Password" placeholder="Enter Your Password"  secureTextEntry={true} onChangeText={(text)=>{setPassword(text)}}></RoundedEditTextWithLabel>
           <RoundedEditTextWithLabel label="Confirm Password" placeholder="Enter Your Password Again"  onChangeText={(text)=>{setconfirmPassword(text)}} secureTextEntry={true}></RoundedEditTextWithLabel>
           
           <RoundedButton text="Sign Up" color="#01b0f1" onPress={onSignUpPressed}>  </RoundedButton>

          </ScrollView>
        </SafeAreaView>
    );


    function onSignUpPressed(){

       if(!fname || !lname || !mobileNo || !email || !password){
        Message.notifyMessage("Fields cannot be empty")
 
       }else if(password !=confirmpassword){
        Message.notifyMessage("Passwords Do Not Match")

       }else{
        RegistrationApi.fetchRegistrationApiData(fname,lname,mobileNo,password,email).then(response=>{
             Message.notifyMessage(response.msg)
             if(response.error==false){
               navigation.navigate("Login");
               Message.notifyMessage("Please Login")
             }
        })
       }

    }

}