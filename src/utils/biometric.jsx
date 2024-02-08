import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

export const authenticate = async () => {
  try {
    const rnBiometrics = new ReactNativeBiometrics()
    const { biometryType } =rnBiometrics.isSensorAvailable()
    if (biometryType) {
      const promptMessage = 'Authenticate with biometrics to Login';

      const result = await ReactNativeBiometrics.createSignature({
        promptMessage,
        payload: 'Login',
      });

      if (result.success) {
        // Authentication successful
        console.log('Authentication successful');
        // You can perform further actions here
      } else if (result.error === 'user_cancel') {
        // User canceled the authentication
        console.warn('User canceled the authentication');
      } else {
        // Authentication failed
        console.error('Authentication failed');
      }
    } else {
      // Biometrics not available or supported on the device
      console.error('Biometrics not available or supported on the device');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
