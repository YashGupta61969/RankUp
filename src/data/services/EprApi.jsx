import axios from 'axios';
import instance from '../axios/axiosInstance';

export const CreateEpr = async requiredData => {
  try {
    // const token = await AsyncStorage.getItem("Token")
    const res = await axios({
      method: 'post',
      url: 'https://deverp-generator.totalrecallsafety.com/generate-EPR',
      headers: {
        Authorization: `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`,
        'Content-Type': 'application/json',
      },
      data: requiredData,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// Post EPR

export const submitEpr = async requiredEprData => {
  try {
    const res = await instance.post('epbopb/', requiredEprData);
    return res;
  } catch (error) {
    throw error;
  }
};

// Get Epr Bullet by Category

export const getEprBulletsCategory = async category => {
  try {
    const res = await instance.get(`epbopb/?category=${category}`);
    return res;
  } catch (error) {
    throw error;
  }
};

// Get Single Narrative Detail

export const getSingleNarrativeDetail = async id => {
  try {
    const res = await instance.get(`epbopb/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

// Delete Narrative

export const deleteSingleNarrative = async id => {
  try {
    const res = await instance.delete(`epbopb/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
