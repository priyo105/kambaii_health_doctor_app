import React, { useEffect,useState } from "react";
import {View,Text,FlatList,ActivityIndicator,Image, TouchableOpacity,ScrollView,BackHandler} from "react-native";
import LabReportApi from '../Apps/apis/LabReportsApi';
import RoundedButton from "./components/RoundedButton";
import CallSelectView from "./components/CallSelectView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LabReport({route,navigation}){
   const { id } = route.params;
//    const { name } = route.params;
   const[data,setData]=useState('');
   const[progressVisible,setProgressVisible]=useState(false);
   const { phoneNo } = route.params;
   const {meetingUrl} = route.params;
   const [images,setImages]=useState('');

   const[addedMedicines,setAddedMedicines]=useState([]);


    useEffect(()=>{
         getLabReport(id);     
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

       <SafeAreaView>
           <Text style={{fontSize:20,marginTop:20,marginBottom:20}}>   Lab Reports </Text>
    
            <View style={{flexDirection:"row"}} >

            </View>

               {progressVisible ? (<ActivityIndicator style={{marginVertical:10}} size="large" color="red" /> ): null }


                     <FlatList
                            data={data}
                            style={{marginVertical:20,height:'40%'}}
                            onViewableItemsChanged={console.warn("changed") }
                            renderItem={({item}) => 

                            <TouchableOpacity onPress={()=>{navigation.navigate("PCPVisitSummary",{
                                images:item.images
                            })}}>
                            <View style={{borderWidth:1,borderRadius:10,borderColor:"#555624", padding:10,marginLeft:20,  marginRight:20,flexDirection:"row"}}>
                               <View > 
                               <Image style={{height:32,width:32,resizeMode:"contain",marginRight:10}} source={require("../assets/report.png")} />
                              </View>

                             <View>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"black"}}> Test Name  :   {item.testname}</Text>
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



<View style={{flexDirection:"row",marginLeft:20,marginTop:20,marginBottom:40}}>
                    <RoundedButton text="Back" color="blue" onPress={()=>{handleBackButtonClick()}}></RoundedButton>
                    <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("specialAssesment",{id:id})}}></RoundedButton>

            </View>
                            
        </SafeAreaView>
   )



   function getLabReport(id){
       setProgressVisible(true)
       LabReportApi.getLabReport(id).then((response)=>{
             console.warn(response)
             setProgressVisible(false)
             setData(response.data.data)
             let images=[];
             images= JSON.parse(response.data.data[0].images);
             console.log(images[1])
            
            
            })

   }
}