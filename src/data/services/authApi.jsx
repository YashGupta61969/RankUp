import instance from "../axios/axiosInstance"

//----------------  Signup -----------------------//

export const signUpUser = async userData => {
  try {
    const res = instance.post("signup/",userData)
    return res;
  } catch (error) {
    throw error;
  }
}

// ---------------- login -----------------------//

export const userLogin = async userData => {
    try {
      const res = await instance.post('login/', userData);
      return res;
    } catch (error) {
      throw error;
    }
  };

  //----------------------------- refresh Token--------------------------

export const refreshToken = async refresh_token => {
  try {
    const res = await instance.post('token/refresh/', {refresh: refresh_token});
    return res;
  } catch (error) {
    throw error;
  }
};
// -----------------Change-Password --------------//

export const changePassword = async userData => {
  try {
    const res = await instance.put('reset_password/', userData);
    return res;
  } catch (error) {
    throw error;
  }
};

  // -------------------Get_user_profile-----------------//

export const getProfile = async () => {
  try {
    const res = await instance.get('profile/');
    return res;
  } catch (error) {
    throw error;
  }
};

//---------------------Update Proile----------------

export const updateProfile = async userData => {
  try {
    const formData = new FormData();
    if (userData?.profile_pic) {
      formData.append('profile_pic',{uri:userData?.profile_pic.path,
        name: `${new Date().getTime()}.jpeg`,
        type: 'image/jpeg',}
      );
    }
    if(userData.firstName){
        formData.append('first_name', userData.firstName);
    }
    if(userData.lastName){
        formData.append('last_name', userData.lastName);
    }
    if(userData.state){
        formData.append('state', userData.state);
    }
    if(userData.city){
        formData.append('city', userData.city);
    }
    if(userData.zipCode){
        formData.append('zip_code', userData.zipCode);
    }

    const res = await instance.put('profile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    return res;
  } catch (error) {
    throw error;
  }
};


// ----------------------Two factor Enable--------------------

export const twoFactorEnable = async userData => {
  console.log("eiruereroperierop",userData)
  try {
    const res = await instance.post('two_fa/', userData);
    return res;
  } catch (error) {
    throw error;
  }
};


// Two factor Verify With Otp

export const twoFactorVerification = async userData => {
  try {
    const res = await instance.post('two_fa_verify/', userData);
    return res;
  } catch (error) {
    throw error;
  }
};



// ------------Two factor Deactivate---------------

export const twoFactorDeactivate = async userData => {
  try {
    const res = instance.put('two_fa_deactivate/', userData);
    return res;
  } catch (error) {
    throw error;
  }
};

//---------------------------------- Logout Profile-------------------------

export const logout = async () => {
  try {
    const res = await instance.post('logout/');
    return res;
  } catch (error) {
    throw error;
  }
};
