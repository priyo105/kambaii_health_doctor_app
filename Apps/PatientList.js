import React, { useEffect } from "react";
import {View,Text,FlatList,Image} from "react-native";
import { useState } from "react/cjs/react.development";
import PatientListApi from "../Apps/apis/PatientListApi"
import ApiUrl from "../Apps/apis/ApiUrls";

export default function PatientList() 
{

    const[data,setData]=useState('');
    let patientData=[];
    useEffect(()=>{
       getAllPatient(ApiUrl.patientListUrl)
    },[])


 return(
     <View> 
             

        <Text style={{textAlign:"center",marginVertical:40,fontSize:20,color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Patient List</Text>
        <FlatList
                            data={data}
                            renderItem={(item) => {
                            <View style={{borderWidth:1,borderRadius:10,borderColor:"#555624", padding:10,marginRight:20,flexDirection:"row",marginHorizontal:20}}>
                             <Image style={{height:32,width:32,resizeMode:"contain",marginRight:10,marginLeft:10,marginTop:20}} source={require("../assets/patient_new.png")} />

                        
                               <View > 
    
                              </View>

                             <View>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Name :{item.name}</Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Age : {item.age}</Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Mobile : {item.mobile} </Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Gender : {item.gender} </Text>
               
                            </View> 
                            </View>}
                        
                        }
                            ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{width:50,height:20}}>
                                    </View>
                                    );
                                }}
                            keyExtractor={(item, index) => index.toString()} /> 




     </View>
 )



 
 function getAllPatient(url){
  
         PatientListApi.getPatientList(url).then((response)=>{
             patientData.push(response.data.external_patient_list.data);
             setData(patientData[0]);   

             while(response.data.external_patient_list.next_page_url!=null){
                 console.warn("entered here")
                 getAllPatient(response.data.external_patient_list.next_page_url);
             }
    })

 }


}