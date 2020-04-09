import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import CustomDrawerContent from '@components/drawer_content';
import About from '@screens/about';
import CompanyDetails from '@screens/company_details';
import CompanyList from '@screens/company_list';
import LocationList from '@screens/location_list';

export type RootDrawerParamList = {
  LocationList: undefined;
  CompanyList: { locationId: string };
  About: undefined;
  CompanyDetails: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='LocationList'
        component={LocationList}
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
