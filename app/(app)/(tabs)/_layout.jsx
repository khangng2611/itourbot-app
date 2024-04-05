import React from 'react';
import { Tabs } from 'expo-router';
import { COLORS, icons } from '../../../constants';
import { Image, StyleSheet } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarStyle: { backgroundColor: COLORS.lightWhite }, tabBarActiveTintColor: COLORS.tertiary, headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                style={styles.logo(color)}
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
                                style={styles.logo(color)}
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
                                style={styles.logo(color)}
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
                                style={styles.logo(color)}
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

const styles = StyleSheet.create({
    logo: (color) => ({
        width: 25,
        tintColor: color
    }),
});