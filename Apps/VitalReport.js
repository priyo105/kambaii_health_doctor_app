import React, { useEffect } from "react";
import {View,Text,FlatList,Image,ActivityIndicator, TextInput,BackHandler,CheckBox} from "react-native";
import { useState } from "react/cjs/react.development";
import PcpVisitApi from "../Apps/apis/PcpVisitApi"
import ApiUrl from "../Apps/apis/ApiUrls";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import RoundedButton from "./components/RoundedButton";


export default function VitalReport({route,navigation}){
    const { id } = route.params;
    const[data,setData]=useState('');
    const[progressVisible,setProgressVisible]=useState(false);
   

    const[name,setName]=useState('');
    const[mobile,setMobile]=useState('');
    const[email,setEmail]=useState('');
    const[height_ft,setheight_ft]=useState('');
    const[height_inch,setheight_inch]=useState('');
    const[weight,setWeight]=useState('');
    const[bmi,setBmi]=useState('');
    const[age,setAge]=useState('');
    const[notes,setNotes]=useState('')

    useEffect(()=>{
        getPcp(id)
        
       },[])
 
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
                 <Text style={{ textAlign:"center",backgroundColor:"orange",color:"white",fontWeight:"bold",marginTop:100,marginHorizontal:10}}>Vital Report</Text>
                 
                  
                    <View style={{marginLeft:20,marginTop:20}}>
                            <Text style={{fontWeight:"bold",fontSize:16}}> Patient Name      :      {name}</Text>
                            <Text style={{fontWeight:"bold",fontSize:16}}> Height                   :    {height_ft} ft {height_inch} inch</Text>
                            <Text style={{fontWeight:"bold",fontSize:16}}> Weight                   :    {weight} kg</Text>
                            <Text style={{fontWeight:"bold",fontSize:16}}> Bmi                        :     {bmi}    </Text>
                            <Text style={{fontWeight:"bold",fontSize:16}}> Age                        :     {age}    </Text>
                   </View> 

                   <Text style={{ textAlign:"center",backgroundColor:"orange",color:"white",fontWeight:"bold",marginTop:100,marginHorizontal:10}}>Old Data</Text>


               <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                       <RoundedButton text="Back" color="blue" onPress={()=>{handleBackButtonClick()}}></RoundedButton>
                       <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("MedicalHistory",{id:id})}}></RoundedButton>

               </View>



           </View>

  );


  function setPcpData(data){
       setName(data.data.uinfo.name)
       setEmail(data.data.uinfo.email)
       setMobile(data.data.uinfo.mobile)
       setheight_ft(data.data.uinfo.height_ft)
       setheight_inch(data.data.uinfo.height_inch)
       setWeight(data.data.uinfo.weight);
       setBmi(data.data.uinfo.bmi);
       setAge(data.data.uinfo.age);
       setNotes(data.data.uinfo.note);
  }

  function getPcp(userId){
    setProgressVisible(true);

    PcpVisitApi.getPcp(userId).then((response)=>{
        console.warn(response)
        setData(response)
        setPcpData(response)
        setProgressVisible(false)
    })

}
}