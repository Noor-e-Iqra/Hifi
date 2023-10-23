import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform, StyleSheet, View} from 'react-native';
// route names
import routes from './routes';
// theme
import {COLORS} from '../theme';
// icons
import icons from '../assets/icons';
import {AddPostStack, Chat, Home, ProfileStack} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const screenOptions = ({route}) => ({
    backBehavior: 'history',
    tabBarHideOnKeyboard: true,
    headerShown: false,
    justifyContent: 'center',
    tabBarShowLabel: false,
    alignItems: 'center',
    tabBarStyle: {
      height: Platform.OS == 'android' ? 90 : '15%',
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 0,
      shadowColor: '#A3A3A41A',
      shadowOffset: {
        width: 0,
        height: -8,
      },
      shadowOpacity: 0.07,
      shadowRadius: 19,
      elevation: 5,
      paddingHorizontal: 5,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      position: 'absolute',
    },
  });

  const TabBarIcon = ({focused, icon}) => {
    return (
      <View style={styles.rec(focused)}>
        <Image
          source={icon}
          resizeMode="contain"
          style={styles.icon(focused)}
        />
      </View>
    );
  };
  return (
    <Tab.Navigator screenOptions={screenOptions} backBehavior="history">
      <Tab.Screen
        name={routes.home.index}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={icons.home} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.add_post.index}
        component={AddPostStack}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={icons.plus} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.chat.index}
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={icons.msg} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.profile.index}
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={icons.user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  icon: focused => ({
    height: 18,
    width: 18,
    tintColor: focused ? COLORS.black : COLORS.white,
  }),
  rec: focused => ({
    height: 38,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: focused ? COLORS.cyan : COLORS.gray,
  }),
});
