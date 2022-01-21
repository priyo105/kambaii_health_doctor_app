import React, { useEffect } from "react";
import {View,Text,FlatList,Image,ActivityIndicator, TextInput,TouchableOpacity,ScrollView} from "react-native";
import { useState } from "react/cjs/react.development";
import PcpVisitApi from "../Apps/apis/PcpVisitApi"
import ApiUrl from "../Apps/apis/ApiUrls";
import RoundedEditTextWithLabel from "./components/RoundedEditTextWithLabel";
import RoundedButton from "./components/RoundedButton";

import { BackHandler } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function PcpView({route,navigation}){
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
    const[value,setValue]=useState([]);

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
                 <Text style={{ textAlign:"center",backgroundColor:"blue",color:"white",fontWeight:"bold",marginTop:100,marginHorizontal:10}}>PCP NOTES</Text>
                 
                 <View style={{height:400}}>   
                 <Text style={{textAlign:"center",marginTop:20}}>Visit Summary</Text>    
                 <FlatList
                            data={value}
                            style={{marginVertical:20,height:'100%'}}
                            onViewableItemsChanged={console.warn("changed") }
                            renderItem={({item}) => 

                            <TouchableOpacity onPress={()=>{navigation.navigate("PCPVisitSummary",{
                                id:item.id
                            })}}>
                            <View style={{borderWidth:1,borderRadius:10,borderColor:"#555624", padding:10,marginLeft:20,  marginRight:20,flexDirection:"row"}}>
                               <View > 
                               <Image style={{height:32,width:32,resizeMode:"contain",marginRight:10}} source={require("../assets/report.png")} />
                              </View>
                            
                             <View>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Doctor Name  :   {item.dname}</Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Date              :   {item.tds}</Text>

                            </View> 
                            </View>
                            </TouchableOpacity> 
                        
                        }
                            ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{width:50,height:20}}>
                                    </View>
                                    );
                                }}
                            keyExtractor={(item, index) => index.toString()} /> 


</View>


       

               <RoundedButton text="Write Notes To PCP" color="orange" onPress={()=>{navigation.navigate("writeNotesToPcp")}}></RoundedButton>
               <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                       <RoundedButton text="Back" color="blue" onPress={()=>{handleBackButtonClick()}}></RoundedButton>
                       <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("VitalReport",{id:id})}}></RoundedButton>

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
       setValue(data.data.prescription.data)
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