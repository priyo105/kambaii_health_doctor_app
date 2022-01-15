import React, { useEffect } from "react";
import MedicineListApi from '../Apps/apis/MedicineListApi';
import {View,FlatList,TouchableOpacity,Text,ActivityIndicator,Image,Linking,ScrollView,StyleSheet,BackHandler} from 'react-native';
import { useState } from "react/cjs/react.development";
import CallSelectView from "./components/CallSelectView";
import RoundedButton from "./components/RoundedButton";
import CheckBox from '@react-native-community/checkbox';
import Message from "./utils/Message";

export default function MedicineView({route,navigation}){

    const[data,setData]=useState('');
    const[progressVisible,setProgressVisible]=useState(false);
    const { id } = route.params;
    const { name } = route.params;
    const { phoneNo } = route.params;
    const {meetingUrl} = route.params;
    const[drugint,setDrugint]=useState('');

    console.warn(id);
    useEffect(()=>{
        getMedicineListByUser(id)
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

    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    //CHECKBOX LOGICCCC
    function onChangeValue(item,index){
        const newData=data.map(newItem =>{
            if(newItem.id==item.id){
                return{     
                    ...newItem,
                    selected: true
                }
            }

            return{
                ...newItem,
               // selected:false
            }
        })

        setData(newData)
        console.warn(data)

    }
    
    
    function getSelectedItemName(){
        
       let medicnines=[]
       data.map(newItem=>{
           if(newItem.selected==true){
               medicnines.push(newItem.generic_name);
           }
       })


       console.warn(medicnines);

       if(medicnines.length>=2){
           console.log(medicnines[0])
       MedicineListApi.getDrugInteractions(medicnines[0],medicnines[1]).then((response)=>{
        console.log(response)
        setDrugint(response.data.data.nlmDisclaimer);
    })

    }else{
        Message.notifyMessage("please select minimum 2 drugs");
        }
}


    return (

        

        <ScrollView style={{marginLeft:20}}>

                        <Text style={{marginTop:20,fontSize:20,fontWeight:"bold",color:"black"}}>  Patient Medications</Text>                    

 
                       {progressVisible ? (<ActivityIndicator size="large" color="red" /> ): null }

                     <View style={{marginTop:10,marginLeft:20,marginBottom:200}}> 
                     <CallSelectView meetingUrl={meetingUrl}  phoneNumber={phoneNo} />

                     <Text style={{marginVertical:10, textAlign:"center",fontSize:14,color:"black",fontWeight:"bold"}}>Medicine List</Text>

                        <FlatList
                            data={data}
                            onViewableItemsChanged={console.warn("changed") }
                            
                            renderItem={({item,index}) => 
                            <View style={{borderWidth:1,borderRadius:10,borderColor:"#555624", padding:10,marginRight:20,flexDirection:"row"}}>
                            
                            
                            <CheckBox
                                disabled={false}
                                value={data[index].selected}
                                onValueChange={() => onChangeValue(item,index)}/>
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



                        <RoundedButton text="Show Drug Interaction" color="black" onPress={()=>{getSelectedItemName()}}></RoundedButton>




                           <Text style={{margin:20}}>{drugint}</Text>


                           <Text style={{marginLeft:20,fontWeight:"bold",textAlign:"center"}}> Stop Old Medicine ? </Text>
                          
                          <View style={{flexDirection:"row",marginLeft:20,marginTop:10,justifyContent:"center"}}>
                           <TouchableOpacity><Text style={{backgroundColor: "black",color:"white",paddingHorizontal:20,paddingVertical:5}}> Yes </Text></TouchableOpacity>
                           <TouchableOpacity><Text style={{marginLeft:10, backgroundColor: "red",color:"white",paddingHorizontal:20,paddingVertical:5}}> No </Text></TouchableOpacity>
                           </View>

                           
    <View style={{flexDirection:"row",marginLeft:0,marginTop:0}}>
                       <RoundedButton text="Back" color="blue" onPress={()=>{handleBackButtonClick()}}></RoundedButton>
                       <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("PescribeView",{id:id})}}></RoundedButton>

               </View>


                        
                    </View>

                

        </ScrollView>


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


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });
  