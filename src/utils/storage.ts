import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUser = async (user: string): Promise<void> => {
  await AsyncStorage.setItem('user', user);
};

export const getUser = async (): Promise<string | null> => {
  return await AsyncStorage.getItem('user');
};

export const clearUser = async (): Promise<void> => {
  await AsyncStorage.removeItem('user');
};
