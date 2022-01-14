import React from "react";
import ApiUrls from "../apis/ApiUrls";

class PatientListApi{


    getPatientList(url){
        console.warn(ApiUrls.medicineApiUrl)

       let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 

         });
   
       const requestOptions = {
           method: 'POST',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(url, requestOptions)
             .then(response => {
               response.json().then(data => {
                 resolve(data);
               });
             })
             .catch(error => {
                 
                console.log("error:" +error)
               reject(error)});
         });
   
    }



}


const b=new PatientListApi();
export default b;