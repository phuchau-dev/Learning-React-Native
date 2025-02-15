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
import {
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import TagComponent from '../../components/TagComponent';
import SpaceComponent from '../../components/SpaceComponent';

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
          <Element4 size={24} color={COLORS.DESC} />
          <Notification size={24} color={COLORS.DESC} />
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
          <TextComponent
            color="#696B6F"
            text="Search task"
          />
          <SearchNormal1 size={24} color={COLORS.DESC} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task Propress" />
              <TextComponent text="30/40 task done" />
              <SpaceComponent height={12}/>
              <RowComponent justify="flex-start">
                <TagComponent text="March 22" onPress={()=>console.log('tag')} />
              </RowComponent>
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
