import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { WebView } from 'react-native-webview';


export default function ZoomMeeting({route,navigation}){
  const {meetingUrl} = route.params;

 return(
     
            <WebView
              source={{ uri: meetingUrl }} />

 );








}