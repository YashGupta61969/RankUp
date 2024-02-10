import axios from "axios";
import instance from "../axios/axiosInstance";

export const CreateEpr = async(requiredData)=>{
    try {
        // const token = await AsyncStorage.getItem("Token")
        const res = await axios({
            method:'post',
            url:("https://deverp-generator.totalrecallsafety.com/generate-EPR"),
            headers: {
                Authorization: `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`,
                'Content-Type': 'application/json',
              },
        data:requiredData,
        })
        return res;
    } catch (error) {
        throw error;
    }
}


// Post EPR

export const submitEpr = async(requiredEprData)=>{
    try {
        const res = await instance.post("erporp/",requiredEprData)
        return res;
    } catch (error) {
        throw error;
    }
}