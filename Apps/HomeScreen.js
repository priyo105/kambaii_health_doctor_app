
import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import Header from './components/Header';
import RoundedButton from './components/RoundedButton';

export default function HomeScreen({navigation}){
        return(

                <SafeAreaView>
                        <View>
                                <Header></Header>                
                                <View style={{backgroundColor:'#006d92',width:'100%',height:'100%',marginTop:10}}> 
                                        <Text style={style.contentTextStyle} >
                                        Kambaii Health's 90-Day Long Lifestyle Changing Wellmness Program is a transformational program that is designed to empower you to live happy, healthy, proactive and a productive life with full of confidence. Kambaii Health's primary objective is to provide a better health care through integrated medical management, medicine management, real time alert monitoring and target oriented wellness program.
                                        </Text>
                                        <RoundedButton onPress={()=>{navigation.navigate("LoginorSignUpSelection")} } text="Get Started" color="#59d3b9" />                 
                                </View>
                        </View>
                </SafeAreaView>
);

}


const style=   StyleSheet.create({
     
    contentTextStyle:{
        marginTop:40,
        marginLeft:10,
        marginRight:10,
        fontFamily:'arial',
        color:'#71c5e6',
        letterSpacing:2,
        fontWeight:'bold'
    },


     roundedButtonStyle:{
        width:200,
        backgroundColor:'#59d3b9',
        height:40,
        color:'#9cf7ed',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:5,
        borderRadius:100,
       fontSize:20

     }


});
