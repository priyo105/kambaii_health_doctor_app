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


    getDrugInteractions(med1,med2){

      let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 
         });
   
         let url=ApiUrls.getGenericName+"?medinime_nam[]="+med1+"&medinime_nam[]="+med2;
          console.warn(url);
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.getGenericName+"?medinime_nam[]="+med1+"&medinime_nam[]="+med2, requestOptions)
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
   