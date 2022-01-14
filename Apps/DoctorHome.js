import React, { useEffect, useState } from "react";

import {View,Text,Icon, Image, TouchableOpacity} from 'react-native'

import UserData from '../Apps/database/UserData'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoundedIcon from "./components/RoundedIcon";

export default function DoctorHome({navigation}){

   const[name,setName]=useState('');
   getUserData();

 return(

    <View>
         <Image style={{alignSelf:"flex-end",width:100,height:100,resizeMode: 'contain',margin:20}} source={require('../assets/logo.png')}/>
          
          <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Welcome</Text>
            <Text style={{fontWeight:"bold",fontSize:20,color:"#000"}}>Hello {name}</Text>
            <Text style={{fontWeight:"bold",fontSize:14,color:'black'}}>from Ahsania Mission cancer hospital !</Text>

         </View>

      
      <TouchableOpacity onPress={()=>{navigation.navigate("ScheduleList")}}>
         <View style={{width:'80%',height:100,backgroundColor:'#2e8ca6',marginTop:50,alignSelf:'center',borderRadius:20}}>
                    
                  <View style={{flexDirection:"row"}}>  
                   <RoundedIcon source={require('../assets/calendar.png')} backgroundColor="#166b87"></RoundedIcon>                   
                     <View>
                      <Text style={{textAlign:"center",marginTop:30,marginLeft:20,fontSize:20,fontWeight:"bold",color:'white'}}>Schedules </Text>
                      <Text style={{textAlign:"center",marginTop:0,marginLeft:100,fontSize:14,fontWeight:"bold",color:'white'}}>For Today </Text>
                    </View>
                   </View>
         </View>
       </TouchableOpacity>



        <View style={{flexDirection:"row",marginLeft:50,marginTop:50}}>
                    

                    <View>
                      <RoundedIcon source={require('../assets/patient.png')} backgroundColor="#01d4a3" onPress={()=>{navigation.navigate("PatientList")}}></RoundedIcon>
                      <Text style={{marginLeft:10,color:'black',fontWeight:"bold",marginTop:5}}>Patient List</Text>
                    </View>


                    <View style={{marginLeft:20}}>
                      <RoundedIcon source={require('../assets/folder.png')} backgroundColor="#01d4a3"></RoundedIcon>
                      <Text style={{marginLeft:10,color:'black',fontWeight:"bold",marginTop:5}}>Visit Record</Text>
                    </View>



                    <View style={{marginLeft:20}}>
                      <RoundedIcon source={require('../assets/dollar.png')} backgroundColor="#01d4a3" onPress={()=>{navigation.navigate("Account")}}></RoundedIcon>
                      <Text style={{marginLeft:15,color:'black',fontWeight:"bold",marginTop:5}}>Account</Text>
                    </View>
        </View>



    </View>

 );



 
 function getUserData(){
    useEffect(() => {
        UserData.getName().then((name)=>{
          global.name=name;
          setName(name)  
        });
      }, []);
  
}

}


