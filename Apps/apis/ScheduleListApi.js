import React from "react";
import apiUrls from '../apis/ApiUrls'


class ScheduleListAPi{

     fetchSceduleList(schedule){
      console.warn(global.token)
      

        let formData = new FormData();
        formData.append('schedule_type', 'present');

        let headers= new Headers({
          'Authorization': 'Bearer '+global.token, 
        });
    
        const requestOptions = {
            method: 'GET',
            headers:headers,
            
                    };
      
          return new Promise((resolve, reject) => {
            fetch("https://dev.kambaiihealth.com/api/external-schedule?schedule_type="+schedule, requestOptions)
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
    
    const b = new ScheduleListAPi();
    export default b;
    