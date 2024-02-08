import AsyncStorage from '@react-native-async-storage/async-storage';
import { authToken } from '../data/redux/slice/authSlice';



// Get Token

export const getToken = async()=>{
    try {
        const token = await AsyncStorage.getItem("Token")
        return token;
    } catch (error) {
        throw error
    }
}


// refreshToken

