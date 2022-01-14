import React, { useEffect } from "react";
import {View,Text,FlatList,Image,ActivityIndicator, TextInput,TouchableOpacity,ScrollView} from "react-native";
import { useState } from "react/cjs/react.development";
import ApiUrl from "../Apps/apis/ApiUrls";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import RoundedButton from "./components/RoundedButton";
import PcpVisitApi from '../Apps/apis/PcpVisitApi'

import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

export default function  PCPVisitSummary({route,navigation}){

    const { id } = route.params;
    const[url,setUrl]=useState('')

    useEffect(()=>{
        getAllPatient();
    })

return(
 
          
          <WebView
            automaticallyAdjustContentInsets={false}
            source={{uri: url}}/>





);




function getAllPatient(url){
  
    PcpVisitApi.getPescriptionView(id).then((response)=>{
        console.warn(response)
        setUrl(response.data)
    })

}

}