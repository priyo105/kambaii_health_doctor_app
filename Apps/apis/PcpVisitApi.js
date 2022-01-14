
import ApiUrls from '../apis/ApiUrls';
class PcpVisitApi{

    getPcp(userId){

       let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 
         });
   
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.pcpvisit+"/"+userId, requestOptions)
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


    getPescriptionView(id){

      let headers= new Headers({
        'Authorization': 'Bearer '+global.token, 
         });
   
       const requestOptions = {
           method: 'GET',
           headers:headers,
           
                   };
     
         return new Promise((resolve, reject) => {
           fetch(ApiUrls.prescription_view_for_app+"/"+id, requestOptions)
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
   
   const b = new PcpVisitApi();
   export default b;
   