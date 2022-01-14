import apiUrls from '../apis/ApiUrls';

 class RegistrationApi{

fetchRegistrationApiData(firstname,lastname,mobile,password,email){
    let formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('mobile', mobile);
    formData.append('password', password);
    formData.append('type', 'doctor');
    formData.append('email', email);

    formData.append('is_external',1);

    const requestOptions = {
        method: 'POST',
        body: formData
      };
  
      return new Promise((resolve, reject) => {
        fetch(apiUrls.registrationUrl, requestOptions)
          .then(response => {
            response.json().then(data => {
              resolve(data);
            });
          })
          .catch(error => reject(error));
      });

 }

}

const b = new RegistrationApi();
export default b;
