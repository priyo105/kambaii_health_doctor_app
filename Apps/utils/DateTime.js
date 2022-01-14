


class DateTime{

     getCurrentDate(){

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
  
        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return date + ' ' + this.getMonthName() + ', ' + year;//format: dd-mm-yyyy;
  }

   getMonthName(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const d = new Date();
  return monthNames[d.getMonth()];
   }


}

const b = new DateTime();
export default b;
