import React, { useEffect } from "react";
import {View,Text,FlatList,Image,ActivityIndicator, TextInput} from "react-native";
import { useState } from "react/cjs/react.development";
import PcpVisitApi from "../Apps/apis/PcpVisitApi"
import ApiUrl from "../Apps/apis/ApiUrls";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import RoundedButton from "./components/RoundedButton";
import MedicalHisotryApi from '../Apps/apis/MedicalHistoryApi'
import { WebView } from 'react-native-webview';

export default function MedicalHistory({route,navigation}){
    const { id } = route.params;
    const[url,setUrl]=useState('');
  
    useEffect(()=>{
        getMedicalHisory(id)
        
       },[])
 
    return(

        <View>
         <View style={{flexDirection:"row"}}>
              <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../assets/doctor.png")} />
               <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"black"}}>{global.name}</Text>                     
               <Image style={{height:70,width:70,resizeMode:"contain",marginLeft:200}} source={require("../assets/logo.png")} />
         </View>
              <Text style={{ textAlign:"center",backgroundColor:"orange",color:"white",fontWeight:"bold",marginTop:100,marginHorizontal:10}}>Medical History</Text>
              

              <View style={{ height:400 }}>
  <WebView
    automaticallyAdjustContentInsets={false}
    source={{uri: url}}
  />
</View>

            <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                    <RoundedButton text="Back" color="blue"></RoundedButton>
                    <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("LabReport",{id:id})}}></RoundedButton>

            </View>

        </View>

);






asd

function getMedicalHisory(userId){
  //  setProgressVisible(true);

    MedicalHisotryApi.getMedicalHistory(userId).then((response)=>{
     setUrl(response.data)

    })

}




}