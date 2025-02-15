import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import ContainerComponent from '../../components/ContainerComponent';
import { globalStyles } from '../../styles/globalStyles';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import { FONT_FAMILIES } from '../../constants/fontFamilies';
import { COLORS } from '../../constants/colors';
import CardComponent from '../../components/CardComponent';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type Props = { navigation: HomeScreenNavigationProp };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.replace('Login');
  };

  return (
    <ContainerComponent>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="Home" />
          <TextComponent text="About" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi Hậu" />
        <TitleComponent text="Be Productive Today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('search')}
        >
          <TextComponent text="Search" />
          <Text>Icon</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task Propress" />
              <TextComponent text="30/40 task done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="Circle Char" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <Button title="Logout" onPress={handleLogout} />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
