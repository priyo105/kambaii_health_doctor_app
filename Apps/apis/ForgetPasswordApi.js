import apiUrls from '../apis/ApiUrls';

 class ForgetPasswordApi{

forgetPasswordApi(username ,password){
    let formData = new FormData();
    formData.append('mobile', username);
    formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        body: formData
      };
  
      return new Promise((resolve, reject) => {
        fetch(apiUrls.forgot_password, requestOptions)
          .then(response => {
            response.json().then(data => {
              resolve(data);
            });
          })
          .catch(error => reject(error));
      });

 }

 sendOtp(username){
  let formData = new FormData();
  formData.append('username', username);

  const requestOptions = {
      method: 'POST',
      body: formData
    };

    return new Promise((resolve, reject) => {
      fetch(apiUrls.sendOtp, requestOptions)
        .then(response => {
          response.json().then(data => {
            resolve(data);
          });
        })
        .catch(error => reject(error));
    });

}


}

const b = new ForgetPasswordApi();
export default b;
