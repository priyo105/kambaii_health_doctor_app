
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View} from "react-native"
import Header from "./components/Header";
import RoundedButton from "./components/RoundedButton";


export default function LoginorSignUpSelection({navigation}){

return (
    <SafeAreaView>
        <Header></Header>
         <View style={{backgroundColor:'#006d92',width:'100%',height:'100%',marginTop:10}}>              
               <View style={{marginTop:100}}>              
                <RoundedButton text="Login" color="#59d3b9" onPress={()=>{navigation.navigate("Login")}}></RoundedButton>
                 <RoundedButton text="Sign Up" color="#01b0f1" onPress={()=>{navigation.navigate("Signup")}}></RoundedButton> 
              </View>
         </View>
    </SafeAreaView>

);


}