
import ApiUrls from '../apis/ApiUrls';
import MedicalHistory from '../MedicalHistory';
class MedicalHistoryApi{

    getMedicalHistory(userId){

       let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 
         });
   
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.medicalHistory+"/"+userId, requestOptions)
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
   
   const b = new MedicalHistoryApi();
   export default b;
   