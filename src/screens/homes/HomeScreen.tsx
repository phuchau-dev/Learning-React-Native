import React, { useEffect } from 'react';
import {
  View,
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
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import TagComponent from '../../components/TagComponent';
import SpaceComponent from '../../components/SpaceComponent';
import CircularComponent from '../../components/CircularComponent';
import CardImageConponent from '../../components/CardImageComponent';

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
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent
                  text="March 22"
                  onPress={() => console.log('tag')}
                />
              </RowComponent>
            </View>
            <View>
              <CircularComponent value={80} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent styles={{ alignItems: 'flex-start' }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <CardImageConponent>
              <TouchableOpacity
                onPress={() => {}}
                style={globalStyles.iconContainer}
              >
                <Edit2 size={20} color={COLORS.WHITE} />
              </TouchableOpacity>
              <TitleComponent text="UX Design" />
              <TextComponent
                text="Task management mobile app"
                size={13}
              />
            </CardImageConponent>
          </View>
          <SpaceComponent width={16} />
          <View style={{ flex: 1 }}>
            <CardImageConponent color="rgba(33, 150, 243, 0.9)">
              <TouchableOpacity
                onPress={() => {}}
                style={globalStyles.iconContainer}
              >
                <Edit2 size={20} color={COLORS.WHITE} />
              </TouchableOpacity>
              <TitleComponent
                text="API Payment"
                size={18}
              />
              <TextComponent
                text="Revision home page"
                size={13}
              />
            </CardImageConponent>
            <SpaceComponent height={16} />
            <CardImageConponent color="rgba(18, 181, 22, 0.9)">
              <TouchableOpacity
                onPress={() => {}}
                style={globalStyles.iconContainer}
              >
                <Edit2 size={20} color={COLORS.WHITE} />
              </TouchableOpacity>
              <TitleComponent text="Update work" />
              <TextComponent
                text="Revision home page"
                size={13}
              />
            </CardImageConponent>
          </View>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <Button title="Logout" onPress={handleLogout} />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
