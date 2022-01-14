import apiUrls from '../apis/ApiUrls';

 class LoginApi{

fetchLoginData(username,password){
    let formData = new FormData();
    formData.append('mobile', username);
    formData.append('password', password);
    formData.append('is_external',1);

    const requestOptions = {
        method: 'POST',
        body: formData
      };
  
      return new Promise((resolve, reject) => {
        fetch(apiUrls.loginurl, requestOptions)
          .then(response => {
            response.json().then(data => {
              resolve(data);
            });
          })
          .catch(error => reject(error));
      });

 }

}

const b = new LoginApi();
export default b;
