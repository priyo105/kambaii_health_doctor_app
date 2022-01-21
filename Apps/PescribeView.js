import React,{useState} from "react";
import {View,Text,Image,TextInput,Modal,StyleSheet,Pressable,FlatList,ScrollView} from "react-native"
import RoundedButton from "./components/RoundedButton";
import NormalButton from "./components/NormalButton";
import DropDownPicker from "react-native-dropdown-picker";
import Message from '../Apps/utils/Message';
import AllMedicineList from '../Apps/apis/AllMedicineList';
import { useEffect } from "react/cjs/react.development";
export default function PescribeView(){
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
      const [modalVisible, setModalVisible] = useState(false);
      const[addedMedicines,setAddedMedicines]=useState([]);

      useEffect(()=>{
        AllMedicineList.getAllMedicine().then((response)=>{
          console.warn(response)

          if(response.error==false){
               let data=[];
               for(let i=0;i<response.data.length;i++){
                  if(response.data[i].name!=null){
                  let value={label:response.data[i].name,value:response.data[i].name}
                  data.push(value);
                  }
               }
               setItems(data);
          }

        })

      },[])

return (
 
    <View style={{margin:20}}>

            <View style={{flexDirection:"row"}}>
                 <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../assets/doctor.png")} />
                  <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"black"}}>{global.name}</Text>                     
                  <Image style={{height:70,width:70,resizeMode:"contain",marginLeft:200}} source={require("../assets/logo.png")} />
            </View>
             
             <Text style={{margin:10}}>Add Medicine</Text>
             <TextInput style={{width:"100%",height:200,borderColor:"black",borderWidth:1}}></TextInput>
         
            <View style={{flexDirection:"row",justifyContent:"center"}}>          
                   <NormalButton onPress={()=>{setModalVisible(true)}} text="Add Medicine" color="red"></NormalButton>
                   <View style={{width:100}}></View>
                   {/* <NormalButton text="Add Lab Test" color="black"></NormalButton> */}
            </View>



        {/* MODAL FOR ADD MEDICINE */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                style={{width:'80%',height:400}}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={{marginBottom:20}}>Select Medicine </Text>
          
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
            Message.notifyMessage("Medicine Added")

            let medicine= {
              "id": "",
              "type": "syrup",
              "medicine_name": value,
              "measurement": "444",
              "measurement_unit": "mg",
              "morning": "yes",
              "afternoon": "yes",
              "night": "no",
              "user_id": 195,
              "how_many_days": "continue",
              "how_much": "4",
              "borameal": "before",
              "prescribed_by": 553,
              "medicine_status": "continue",
              "how_much_unit": "pieces"
            }

            addedMedicines.push(medicine);
            setAddedMedicines(addedMedicines);
            console.warn("added ::" + addedMedicines[0].medicine_name)
            
          }}></NormalButton>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
         
                    
                    
                     <Text style={{color:"black",marginLeft:70, fontWeight:"bold",marginTop:10}}>Added Medicines :</Text>
                            
                        
                        <FlatList
                            data={addedMedicines}
                            style={{marginVertical:10,height:'10%',marginLeft:100}}
                            onViewableItemsChanged={console.warn("changed") }
                            renderItem={({item}) => 

                                <Text>{item.medicine_name}</Text>
                        
                        }
                            ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{width:50,height:0}}>
                                    </View>
                                    );
                                }}
                            keyExtractor={(item, index) => index.toString()} /> 


                      <RoundedButton text="Save" color="black" onPress={()=>{Message.notifyMessage("data saved")}}></RoundedButton>
{/* 
                      <View style={{flexDirection:"row",marginLeft:20,marginTop:20,marginBottom:40}}>
                    <RoundedButton text="Back" color="blue"></RoundedButton>
                    <RoundedButton text="Next" color="green" onPress={()=>{navigation.navigate("PescribeView",{id:id})}}></RoundedButton>

            </View> */}

    </View>

);



}




const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      height:400,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      marginTop:100, 
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  