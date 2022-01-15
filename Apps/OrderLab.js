import React, { useEffect } from "react";
import LabReportApi from '../Apps/apis/LabReportsApi';
import {View,FlatList,TouchableOpacity,Text,ActivityIndicator,Image,Linking,BackHandler} from 'react-native';
import { useState } from "react/cjs/react.development";
import NormalButton from "./components/NormalButton";
import DropDownPicker from "react-native-dropdown-picker";
import Message from "./utils/Message";
import RoundedButton from "./components/RoundedButton";

export default function OrderLab({route,navigation}){
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Napa', value: 'napa'},
        {label: 'Ace', value: 'ace'},
        {label: 'Amodis', value: 'amodis'},
        {label: 'Sandocol D', value: 'sandocol'},
        {label: 'Alatrol', value: 'alatrol'},
        {label: 'Ecospirin', value: 'ecospirin'}
      ]);
      const [open, setOpen] = useState(false);
      const { id } = route.params;
      const [modalVisible, setModalVisible] = useState(false);
      const[addedMedicines,setAddedMedicines]=useState([]);


    useEffect(()=>{
        getAllReports()
        
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
    <View style={{marginHorizontal:20,marginTop:30}}>

<View style={{flexDirection:"row"}}>
                 <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../assets/doctor.png")} />
                  <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"black"}}>{global.name}</Text>                     
                  <Image style={{height:70,width:70,resizeMode:"contain",marginLeft:200}} source={require("../assets/logo.png")} />
            </View>
                 <Text style={{ textAlign:"center",backgroundColor:"blue",color:"white",fontWeight:"bold",marginTop:100,marginHorizontal:10,marginBottom:40}}>Order Labs</Text>

                 



          <DropDownPicker
            open={open}
            value={value}
            searchable={true}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
    />


<NormalButton text="Add" color="green" onPress={()=>{
            Message.notifyMessage("Test Added")

            let medicine= {
              "id": "",
              "testname": value,
              
            }

            addedMedicines.push(medicine);
            setAddedMedicines(addedMedicines);
            //console.warn("added ::" + addedMedicines[1].testname)
            
          }}></NormalButton>

<Text style={{textAlign:"center",marginTop:30,fontSize:16,fontWeight:"bold"}}>Added Tests</Text>

                  
                  <View style={{height:100}}>
                      <FlatList
                            data={addedMedicines}
                            style={{marginVertical:10,height:'50%'}}
                            onViewableItemsChanged={console.warn("changed") }
                            renderItem={({item}) => 

                                <Text>{item.testname}</Text>
                        
                        }
                            ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{width:50,height:0}}>
                                    </View>
                                    );
                                }}
                            keyExtractor={(item, index) => index.toString()} /> 
                </View>


              <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
                       <RoundedButton text="Back" color="blue" onPress={()=>{handleBackButtonClick()}}></RoundedButton>
                       <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("MedicineView",{id:id})}}></RoundedButton>

               </View>
              </View>


  );

  function getAllReports(){
      LabReportApi.allLabTestList().then((response)=>{
          console.warn(response.data);
          if(response.error==false){
            let data=[];
            for(let i=0;i<response.data.length;i++){
               if(response.data[i].testname!=null){
               let value={label:response.data[i].testname,value:response.data[i].testname}
               data.push(value);
               }
            }
            setItems(data);
       }
    
    })
  }

}