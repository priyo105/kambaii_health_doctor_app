import React, { useEffect } from "react";
import MedicineListApi from '../Apps/apis/MedicineListApi';
import {View,FlatList,TouchableOpacity,Text,ActivityIndicator,Image,Linking} from 'react-native';
import { useState } from "react/cjs/react.development";
import CallSelectView from "./components/CallSelectView";

export default function MedicineView({route,navigation}){

    const[data,setData]=useState('');
    const[progressVisible,setProgressVisible]=useState(false);
    const { id } = route.params;
    const { name } = route.params;
    const { phoneNo } = route.params;
    const {meetingUrl} = route.params;

    console.warn(id);
    useEffect(()=>{
        getMedicineListByUser(195)
    },[])
 
        return (


        <View style={{marginLeft:20}}>

                        <Text style={{marginTop:20,fontSize:20,fontWeight:"bold",color:"black"}}>  Patient Medications</Text>
                        <Text style={{marginTop:20,marginLeft:10,fontSize:16,fontWeight:"bold",color:"#000"}}>Patient Name : {name}</Text>
                    
                         <CallSelectView meetingUrl={meetingUrl}  phoneNumber={phoneNo} />


                      
                       {progressVisible ? (<ActivityIndicator size="large" color="red" /> ): null }

                     <View style={{marginTop:10,marginLeft:20,marginBottom:200}}> 


                     <Text style={{marginVertical:10, textAlign:"center",fontSize:14,color:"black",fontWeight:"bold"}}>Medicine List</Text>

                        <FlatList
                            data={data}
                            onViewableItemsChanged={console.warn("changed") }
                            renderItem={({item}) => 
                            <View style={{borderWidth:1,borderRadius:10,borderColor:"#555624", padding:10,marginRight:20,flexDirection:"row"}}>
                             <Image style={{height:32,width:32,resizeMode:"contain",marginRight:10,marginLeft:10,marginTop:20}} source={require("../assets/capsules.png")} />

                        
                               <View > 
    
                              </View>

                             <View>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Name :{item.medicine_name}</Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Generic : {item.generic_name}</Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Measurment : {item.measurement} {item.measurement_unit}</Text>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Status : {item.medicine_status} </Text>
               
                            </View> 
                            </View>
                        
                        }
                            ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{width:50,height:20}}>
                                    </View>
                                    );
                                }}
                            keyExtractor={(item, index) => index.toString()} /> 
                    </View>

        </View>


        );




function getMedicineListByUser(userId){
    setProgressVisible(true);

    MedicineListApi.getMedicineListByUser(userId).then((response)=>{
        console.warn(response.data.data)
        setData(response.data.data)
        setProgressVisible(false)
    })

}




} 