
import ApiUrls from '../apis/ApiUrls';
class AllMedicineList{

    getAllMedicine(){
        console.warn(ApiUrls.medicineApiUrl)

       let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 
         });
   
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.existingMedicineList, requestOptions)
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
   
   const b = new AllMedicineList();
   export default b;
   