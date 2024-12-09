import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '@/components/TabBar';
import IconSymbol from '@/components/ui/IconSymbol';

export default function TabLayout() {

  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => <IconSymbol name='home' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="animations"
        options={{
          headerShown: false,
          title: 'Projects',
          tabBarIcon: ({ color, focused, size }) => <IconSymbol name='project' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="socials"
        options={{
          headerShown: false,
          title: 'Socials',
          tabBarIcon: ({ color, focused, size }) => <IconSymbol name='share' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, focused, size }) => <IconSymbol name='profile' size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
