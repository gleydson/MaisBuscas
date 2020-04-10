import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CustomDrawerContent from '@components/drawer_content';
import CompanyDetails from '@screens/company_details';
import CompanyList from '@screens/company_list';
import LocationList, { Location } from '@screens/location_list';

export type RootStackParamList = {
  LocationList: undefined;
  CompanyList: { location: Location };
  CompanyDetails: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  function StackScreens() {
    return (
      <Stack.Navigator
        headerMode='float'
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name='LocationList' component={LocationList} />
        <Stack.Screen name='CompanyList' component={CompanyList} />
        <Stack.Screen name='CompanyDetails' component={CompanyDetails} />
      </Stack.Navigator>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='App'
        component={StackScreens}
        options={({ route }) => {
          const currentScreen = route?.state?.routes[route?.state?.index].name;
          return {
            swipeEnabled: currentScreen === 'CompanyList',
          };
        }}
      />
    </Drawer.Navigator>
  );
}
