
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen  from './Apps/HomeScreen';
import LoginorSignUpSelection from './Apps/LoginorSignUpSelection';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup  from './Apps/Signup';
import Login from './Apps/Login';
import DoctorHome from './Apps/DoctorHome';
import ScheduleList from './Apps/ScheduleListView';
import MedicineView from './Apps/MedicineView';
import LabReport from './Apps/LabReport';
import ZoomMeeting from './Apps/ZoomMeetting';
import PatientList from './Apps/PatientList';
import PescribeView from './Apps/PescribeView';
import LabReportImageView from './Apps/LabReportImageView';
import Account from './Apps/Accounts';
import PcpView from './Apps/PcpView';
import writeNotesToPcp from './Apps/writeNotesToPcp'
import VitalReport from './Apps/VitalReport';
import MedicalHistory from './Apps/MedicalHistory';
import ForgetPassword from './Apps/ForgetPassword';
import OtpView from './Apps/OtpView';
import PCPVisitSummary from './Apps/PCPVisitSummary';
import specialAssesment from './Apps/specialAssesment';
import OrderLab from './Apps/OrderLab';

const Stack = createNativeStackNavigator();


const App: () => Node = () => {

  return (
      <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerStyle: {backgroundColor: '#ec254e'},
                headerTintColor: 'white',}}>

                          <Stack.Screen
                              name="HomeScreen"
                              component={HomeScreen}
                              options={{headerShown: false}}
                            />


                          <Stack.Screen
                              name="LoginorSignUpSelection"
                              component={LoginorSignUpSelection}
                              options={{headerShown: false}}
                            />


                        <Stack.Screen
                              name="Signup"
                              component={Signup}
                              options={{headerShown: false}}
                            />

                        
                        <Stack.Screen
                              name="Login"
                              component={Login}
                              options={{headerShown: false}}
                            />   

      
                        <Stack.Screen
                              name="DoctorHome"
                              component={DoctorHome}
                              options={{headerShown: false}}
                            />  


                      <Stack.Screen
                              name="ScheduleList"
                              component={ScheduleList}
                              options={{headerShown: false}}
                            /> 


                    <Stack.Screen
                              name="MedicineView"
                              component={MedicineView}
                              options={{headerShown: false}}
                            /> 


                      <Stack.Screen
                              name="LabReport"
                              component={LabReport}
                              options={{headerShown: false}}
                            />
                            
                      <Stack.Screen
                              name="ZoomMeeting"
                              component={ZoomMeeting}
                              options={{headerShown: false}}
                            />       

                      <Stack.Screen
                              name="PatientList"
                              component={PatientList}
                              options={{headerShown: false}}
                            />   
                    
                    
                     <Stack.Screen
                              name="LabReportImageView"
                              component={LabReportImageView}
                              options={{headerShown: false}}
                            />   

                      <Stack.Screen
                              name="PescribeView"
                              component={PescribeView}
                              options={{headerShown: false}}
                            />   
                      <Stack.Screen
                              name="Account"
                              component={Account}
                              options={{headerShown: false}}
                            /> 
                      <Stack.Screen
                              name="PcpView"
                              component={PcpView}
                              options={{headerShown: false}}
                            /> 
                            
                            <Stack.Screen
                              name="writeNotesToPcp"
                              component={writeNotesToPcp}
                              options={{headerShown: false}}
                            /> 
                               
                               <Stack.Screen
                              name="VitalReport"
                              component={VitalReport}
                              options={{headerShown: false}}
                            /> 
                            
                            <Stack.Screen
                              name="MedicalHistory"
                              component={MedicalHistory}
                              options={{headerShown: false}}
                            /> 
                            
                            
                             <Stack.Screen
                              name="ForgetPassword"
                              component={ForgetPassword}
                              options={{headerShown: false}}
                            /> 
                            
                            <Stack.Screen
                              name="OtpView"
                              component={OtpView}
                              options={{headerShown: false}}
                            /> 
                            

                     
                            
                            <Stack.Screen
                              name="PCPVisitSummary"
                              component={PCPVisitSummary}
                              options={{headerShown: false}}
                            /> 
                            
                            
                            <Stack.Screen
                              name="specialAssesment"
                              component={specialAssesment}
                              options={{headerShown: false}}
                            /> 
                            
                            <Stack.Screen
                              name="OrderLab"
                              component={OrderLab}
                              options={{headerShown: false}}
                            /> 
                            

           </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
