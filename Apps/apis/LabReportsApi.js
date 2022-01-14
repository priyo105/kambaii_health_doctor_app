
import ApiUrls from '../apis/ApiUrls';
class LabReportApi{

    getLabReport(userId){
        console.warn(ApiUrls.medicineApiUrl)

       let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 

         });
   
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.labReportUrl+"user_id="+userId, requestOptions)
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



    allLabTestList(){
      let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 

         });
   
       const requestOptions = {
           method: 'POST',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.all_labTest, requestOptions)
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
   
   const b = new LabReportApi();
   export default b;
   