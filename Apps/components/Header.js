
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';

export default function Header(){
    return(
        <View>
                <Image  source={require('../../assets/logo.png')} style={style.imageStyle} />  
                <Text style={style.textStyle}>Kambaii Health</Text>                    
        </View>
    );
}



const style=   StyleSheet.create({
     
    imageStyle:{
        width: 180,
        height: 130,
        marginTop:50,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },

    textStyle:{
       textAlign:'center', 
       marginTop:30,
       fontSize:25,
       fontWeight:'bold',
       color:'#000'
    }


});
