import React from "react";
import {View,Image} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import Gallery from 'react-native-image-gallery';

export default function LabReportImageView ({route}) {
  
    const { images } = route.params;
     let  imageArray=[];
     imageArray= JSON.parse(images);
     
     const imagesForViewer=[];
     for(let i=0;i<imageArray.length;i++){
          
        let a={
            source:{uri:"https://dev.kambaiihealth.com/"+imageArray[i] } 
        }
        
        imagesForViewer.push(a);

     }




    console.log(imagesForViewer[0].url)
    return(
     

<Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={imagesForViewer}
      />


    );
    
}