import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
class UserData extends Component {
    async setUserData(name,token) {     
        await   AsyncStorage.setItem('name',name)
        await   AsyncStorage.setItem('token',token)
    }

    async getName(){
        let user=await AsyncStorage.getItem('name');
        return user;
    }

    

    async getToken(){
        let user=await AsyncStorage.getItem('token');
        return user;
    }

}

const c = new UserData();
export default c;

