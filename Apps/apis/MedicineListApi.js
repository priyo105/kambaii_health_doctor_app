
import ApiUrls from '../apis/ApiUrls';
class MedicineListApi{

    getMedicineListByUser(userId){
        console.warn(ApiUrls.medicineApiUrl)

       let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 
         });
   
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.medicineApiUrl+"user_id="+userId, requestOptions)
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
   
   const b = new MedicineListApi();
   export default b;
   