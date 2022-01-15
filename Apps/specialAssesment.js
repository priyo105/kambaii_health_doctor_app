import React, { useEffect } from "react";
import {View,Text,FlatList,Image,ActivityIndicator, TextInput,BackHandler} from "react-native";
import { useState } from "react/cjs/react.development";
import PcpVisitApi from "../Apps/apis/PcpVisitApi"
import ApiUrl from "../Apps/apis/ApiUrls";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import RoundedButton from "./components/RoundedButton";



export default function specialAssesment({route,navigation}){
  const { id } = route.params;

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
      }
    
      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);


  return(
      <View>
            <View style={{flexDirection:"row"}}>
                 <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../assets/doctor.png")} />
                  <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"black"}}>{global.name}</Text>                     
                  <Image style={{height:70,width:70,resizeMode:"contain",marginLeft:200}} source={require("../assets/logo.png")} />
            </View>
                 <Text style={{ textAlign:"center",backgroundColor:"orange",color:"white",fontWeight:"bold",marginTop:100,marginHorizontal:10}}>Special Assesment</Text>

                 <Text style={{textAlign:"center",marginTop:30}}>Write your Assesment Below--</Text>

                 <View style={{marginTop:40}}>
            <TextInput style={{width:300,height:300,borderWidth:1,marginLeft:30,paddingBottom:250,paddingLeft:10}}  ></TextInput>

            </View>

            <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <RoundedButton text="Back" color="blue" onPress={()=>{handleBackButtonClick()}}></RoundedButton>
                    <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("OrderLab",{id:id})}}></RoundedButton>

            </View>

      </View>
  )




}
