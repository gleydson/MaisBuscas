import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import CustomDrawerContent from '@components/drawer_content';
import About from '@screens/about';
import Cities from '@screens/cities';
import ServiceDetails from '@screens/service_details';
import ServiceList from '@screens/service_list';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='Cities'
        component={Cities}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen name='ServiceList' component={ServiceList} />
      <Drawer.Screen
        name='ServiceDetails'
        component={ServiceDetails}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name='About'
        component={About}
        options={{
          swipeEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
}
