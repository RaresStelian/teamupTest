import EncryptedStorage from 'react-native-encrypted-storage';

export const retrieveUserSession = async () => {
  try {
    const token = await EncryptedStorage.getItem('user_session');
    return token;
  } catch (error) {
    alert(error.message);
  }
};
