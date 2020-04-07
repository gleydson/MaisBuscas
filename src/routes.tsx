import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import CustomDrawerContent from '@components/drawer_content';
import About from '@screens/about';
import Cities from '@screens/cities';
import CompanyDetails from '@screens/company_details';
import CompanyList from '@screens/company_list';

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
      <Drawer.Screen name='CompanyList' component={CompanyList} />
      <Drawer.Screen
        name='CompanyDetails'
        component={CompanyDetails}
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
