import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {IconButton, Menu} from 'react-native-paper';
import {COLORS} from '../../theme';

export const CustomHeader = ({menuItems}) => {
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View style={styles.row}>
      <IconButton
        icon={'chevron-left'}
        onPress={() => navigation.goBack()}
        iconColor={COLORS.white}
        size={30}
      />
      <Image
        source={images.appname_small}
        resizeMode="contain"
        style={{height: 20, width: '15%', flex: 1, marginHorizontal: 10}}
      />

      <Menu
        visible={showOptions}
        onDismiss={() => setShowOptions(false)}
        style={{marginTop: 10}}
        anchor={
          <IconButton
            icon={'dots-vertical'}
            onPress={() => setShowOptions(true)}
            iconColor={COLORS.white}
            size={30}
          />
        }>
        {menuItems?.map((item, i) => (
          <Menu.Item
            key={i}
            title={item.title}
            onPress={() => {
              setShowOptions(false);
              item.onPress();
            }}
          />
        ))}
      </Menu>
    </View>
  );
};
