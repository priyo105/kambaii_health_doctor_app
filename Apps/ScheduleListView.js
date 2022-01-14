import React, { useEffect, useState } from "react";
import {View,FlatList,Text, Image, TouchableOpacity,StyleSheet,ActivityIndicator,ScrollView} from "react-native";
import ScheduleListApi from '../Apps/apis/ScheduleListApi';
import DateTime from '../Apps/utils/DateTime';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ApiUrls from '../Apps/apis/ApiUrls';

export default function ScheduleList({navigation}){
      useEffect(()=>{   getDoctorScheduleList();},[])
      const[data,setData]=useState('');
      const[reason,setReason]=useState('');
      const[gender,setGender]=useState('');
      const[age,setAge]=useState('');
      const[date,setDate]=useState('');
      const[time,setTime]=useState('');
      const[patientCount,setPatientCount]=useState(0);
      const[visible,setVisible]=useState(true);
      const[tableHead,setTableHead]=useState(['S. No','Name', 'Gender/Age', 'Reason']);
      const[tableData,setTableData]=useState([]);
      const[progressVisible,setProgressVisible]=useState(false);
      const[selectedPatiendId,setSelectedPatientId]=useState(0);
      const[selectedPatientName,setSelectedPatientName]=useState('');
      const[meetingUrl,setMeetingUrl]=useState('');
      const[phoneNo,setPhoneNo]=useState('');
      const[schedule,setSchedule]=useState('present');

      const imageUrl="https://dev.kambaiihealth.com/public/profile_pic/";

      return(
        <View style={{margin:20}}>
            <ScrollView>
            <View style={{flexDirection:"row"}}>
                 <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../assets/doctor.png")} />
                  <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"black"}}>{global.name}</Text>                     
                  <Image style={{height:70,width:70,resizeMode:"contain",marginLeft:200}} source={require("../assets/logo.png")} />
            </View>


             <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginBottom:50}}> SCHEDULE     {DateTime.getCurrentDate()} </Text>
             <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginBottom:50}}>      {patientCount} Patients Today </Text>
              
              <TouchableOpacity onPress={()=>{
                  setSchedule("previous");
                  getDoctorScheduleList();
                  
                  }}>
                  <Text style={{textAlign:"right",marginRight:20,fontSize:14,fontWeight:"bold"}}>See Previous</Text>
              </TouchableOpacity>
 
             {progressVisible ? (<ActivityIndicator size="large" color="red" /> ): null }

            <FlatList
                    horizontal={true}
                    data={data}
                    onViewableItemsChanged={console.warn("changed") }
                    renderItem={({item}) => 
                    <TouchableOpacity onPress={()=>{
                        onCircleItemPress(item)
                        setSelectedPatientId(item.user_id);
                        console.warn(selectedPatiendId);
                        setSelectedPatientName(item.name)
                        }}>
                         <CircleItems item={item}></CircleItems>
                    </TouchableOpacity> 
                
                }
                    ItemSeparatorComponent={() => {
                            return (
                                <View style={{width:50,height:50}}>
                              </View>
                            );
                        }}
                    keyExtractor={(item, index) => index.toString()} />


             <View style={{flexDirection:"row",alignSelf:"flex-end",marginTop:20}}>
                 <TouchableOpacity onPress={()=>{setVisible(true)}}>
                     <Image style={{height:24,width:24,resizeMode:"contain",marginRight:10}} source={require("../assets/list.png")} />
                 </TouchableOpacity>

                 <TouchableOpacity onPress={()=>{setVisible(false)}}>
                 <Image style={{height:20,width:20,resizeMode:"contain"}} source={require("../assets/grid.png")} />
                 </TouchableOpacity>

             </View>


          
       { visible?
          <View>
          
             <View  style={{flexDirection:"row",marginTop:70,marginLeft:40}}>
                 <Text style={{color:"black",fontWeight:"bold",flex:1}}>Reason:</Text>
                 <Text style={{color:"black",flex:1}}>{reason}</Text>
             </View>

             <View  style={{flexDirection:"row",marginTop:20,marginLeft:40}}>
                 <Text style={{color:"black",fontWeight:"bold",flex:1}}>Gender:</Text>
                 <Text style={{color:"black",flex:1}}>{gender}</Text>
             </View>

             <View  style={{flexDirection:"row",marginTop:20,marginLeft:40}}>
                 <Text style={{color:"black",fontWeight:"bold",flex:1}}>Age:</Text>
                 <Text style={{color:"black",flex:1}}>{age}</Text>
             </View>

             <View  style={{flexDirection:"row",marginTop:20,marginLeft:40}}>
                 <Text style={{color:"black",fontWeight:"bold",flex:1}}>Date:</Text>
                 <Text style={{color:"black",flex:1}}>{date}</Text>
             </View>

             <View  style={{flexDirection:"row",marginTop:20,marginLeft:40}}>
                 <Text style={{color:"black",fontWeight:"bold",flex:1}}>Time:</Text>
                 <Text style={{color:"black",flex:1}}>{time}</Text>
             </View>
        </View>
        :<View >
            <Table borderStyle={{borderWidth: 1}} style={{marginTop:20}}>
                <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                <TableWrapper style={styles.wrapper}>
                <Rows data={tableData} flexArr={[1, 2, 1]} style={styles.row} textStyle={styles.text}/>
                </TableWrapper>
            </Table>
      </View>
        
        
        }



            <View  style={{flexDirection:"row",marginTop:20,marginLeft:40}}>               
                <TouchableOpacity onPress={()=>{navigation.navigate("MedicineView",{
                    id: selectedPatiendId,
                    name: selectedPatientName,
                    meetingUrl: meetingUrl,
                    phoneNo: phoneNo
                });}} >
                         <View style={{flex:1,marginRight:20}}>
                                 <Text style={{color:"white",fontWeight:"bold",backgroundColor:"blue",width:120,height:40,textAlign:"center",paddingTop:10}}>View Details</Text>
                        </View> 
                </TouchableOpacity> 

                
                <TouchableOpacity onPress={()=>{navigation.navigate("PcpView",{
                    id: selectedPatiendId,
                    name: selectedPatientName,
                    meetingUrl: meetingUrl,
                    phoneNo: phoneNo

                    }); }}>

                            <View style={{flex:1}}>             
                            <Text style={{color:"white",fontWeight:"bold",backgroundColor:"blue",width:120,height:40,textAlign:"center",paddingTop:10,fontSize:12}}>PCP Visit Summary</Text>
                            </View>
                </TouchableOpacity>
             </View>

             </ScrollView>

        </View>
    )

  


    function getDoctorScheduleList(){    
         setProgressVisible(true)
        ScheduleListApi.fetchSceduleList(schedule).then((response)=>{       
            setData(response.data.external_schedule_list.data);
            initialData(response.data.external_schedule_list.data[0])
            setPatientCount(response.data.external_schedule_list.data.length)
    
             
             let data=[];
             for(let i=0;i<response.data.external_schedule_list.data.length;i++){
                 let age=response.data.external_schedule_list.data[i].age;
                 let gender=response.data.external_schedule_list.data[i].gender;
                 let name=response.data.external_schedule_list.data[i].name
                 data.push([i+1,name,gender+"/"+age,response.data.external_schedule_list.data[i].stime])
             }
             
             setTableData(data)
             setProgressVisible(false)
             console.warn(data)
        })
    }
    

   function initialData(data){
       setAge(data.age);
       setDate(data.sdate);
       setTime(data.stime);
       setGender(data.gender);
       setPhoneNo(data.mobile)
       setSelectedPatientId(data.user_id);
       setSelectedPatientName(data.name)
       setMeetingUrl(data.meeting_url);
       
   }

    function onCircleItemPress(item){
        setAge(item.age)
        setDate(item.sdate)
        setGender(item.gender)
        setMeetingUrl(item.meeting_url)
        setTime(item.stime);   
        setPhoneNo(item.mobile)
    }
}


const CircleItems=(props)=>{
 
    return(

        <View>
              
            <Image style={{height:80,width:80,borderRadius:50,color:"black",textAlign:"center",paddingTop:25,fontSize:11,borderColor:"black",borderWidth:2}}  source={{uri:"https://dev.kambaiihealth.com/public/profile_pic/"+props.item.photo}} />
             <Text style={{textAlign:"center",fontSize:13,fontWeight:"bold"}}>{props.item.name} </Text>
        </View>  
       
    );

}





const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });