import React from 'react';
import { Tabs } from 'expo-router';
import styles from '../../../styles/app.style';
import { COLORS, icons } from '../../../constants';
import { Image } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: COLORS.primary,
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                style={styles.tabBarLogo(color)}
                                source={icons.home}
                                resizeMode='contain' />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="Map"
                options={{
                    title: 'Map',
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                style={styles.tabBarLogo(color)}
                                source={icons.map}
                                resizeMode='contain'
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="History"
                options={{
                    title: 'Your tours',
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                style={styles.tabBarLogo(color)}
                                source={icons.history}
                                resizeMode='contain'
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                style={styles.tabBarLogo(color)}
                                source={icons.profile}
                                resizeMode='contain'
                            />
                        );
                    },
                }}
            />
        </Tabs>
    );
}