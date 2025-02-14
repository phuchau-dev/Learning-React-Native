import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
type Props = { navigation: SplashScreenNavigationProp };

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      setTimeout(() => {
        navigation.replace(user ? 'Home' : 'Login');
      }, 3000);
    };
    checkLogin();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📝 ToDoList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#333' },
});

export default SplashScreen;
