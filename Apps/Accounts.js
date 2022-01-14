import React, { useEffect, useState } from "react";
import {View,Text,Image,StyleSheet} from 'react-native'
import RoundedButtonWithText from './components/RoundedButtonWithText'; 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import RoundedIcon from "./components/RoundedIcon";

export default function Account({navigation}){
    const[tableHead,setTableHead]=useState(['S. No','Name', 'Date', 'Amount']);
    const[tableData,setTableData]=useState([]);

   let data= [
        ['1', 'Shain', '3-11-2021', '159'],
        ['2', 'Faizan', '4-11-2021', '320'],
        ['3', 'Waseem', '8-12-2021', '200'],
        ['4', 'David', '10-12-2021', '120']
      ]
    useEffect(()=>{
        setTableData(data)
    },[])
   

return(

 <View style={{margin:30}}>
            <View style={{flexDirection:"row"}}>
                 <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../assets/doctor.png")} />
                  <Text style={{marginTop:20,marginLeft:20,fontSize:20,fontWeight:"bold",color:"black"}}>{global.name}</Text>                     
                  <Image style={{height:70,width:70,resizeMode:"contain",marginLeft:200}} source={require("../assets/logo.png")} />
            </View>


            <Text style={{fontSize:25,fontWeight:"bold", color:"black",marginTop:40}}> My Wallet : $850</Text>

            <View style={{flexDirection:"row",justifyContent:"space-between"}}>

            <RoundedButtonWithText backgroundColor="#f4b081" centerText="$250" bottomText="Today"></RoundedButtonWithText>
            <RoundedButtonWithText backgroundColor="#bdd6ee" centerText="$13000" bottomText="This Month"></RoundedButtonWithText>
            <RoundedButtonWithText backgroundColor="#00d5a3" centerText="$14000" bottomText="Till Date"></RoundedButtonWithText>
           
           
 
           
            </View>
        

            <Table borderStyle={{borderWidth: 1}} style={{marginTop:20}}>
                <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                <TableWrapper style={styles.wrapper}>
                <Rows data={tableData} flexArr={[1, 2, 1]} style={styles.row} textStyle={styles.text}/>
                </TableWrapper>
            </Table>



           <View style={{flexDirection:"row"}}>
            <View style={{marginLeft:20}}>
                      <RoundedIcon source={require('../assets/folder.png')} backgroundColor="#01d4a3"></RoundedIcon>
                      <Text style={{marginLeft:10,color:'black',fontWeight:"bold",marginTop:5}}>Transaction Request</Text>
            </View>

            <View style={{marginLeft:20}}>
                      <RoundedIcon source={require('../assets/dollars.png')} backgroundColor="#01d4a3"></RoundedIcon>
                      <Text style={{marginLeft:20,color:'black',fontWeight:"bold",marginTop:5}}>History</Text>
            </View>

            </View> 

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