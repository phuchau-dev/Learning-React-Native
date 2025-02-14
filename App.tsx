import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center', // Chữ 'i' phải viết hoa
  },
  title: {
    fontWeight: '700', // Phải là chuỗi
    fontSize: 32,
    color: 'white', // 'color' thay vì 'colors'
  },
});
