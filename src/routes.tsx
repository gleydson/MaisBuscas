import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { ApplicationState } from '@store/index';
import CustomDrawerContent from '@components/drawer_content';
import CompanyDetails from '@screens/company_details';
import CompanyList from '@screens/company_list';
import LocationList from '@screens/location_list';
import IndicateCompany from '@screens/indicate_company';
import TicketList from '@screens/ticket_list';
import UpdateUserInfo from '@screens/update_user_info';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const isPhoneInformed = useSelector(
    (state: ApplicationState) => state.settings.isPhoneInformed
  );

  const StackScreens: React.FC = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name='LocationList' component={LocationList} />
      <Stack.Screen name='CompanyList' component={CompanyList} />
      <Stack.Screen name='CompanyDetails' component={CompanyDetails} />
      <Stack.Screen name='IndicateCompany' component={IndicateCompany} />
      <Stack.Screen name='TicketList' component={TicketList} />
    </Stack.Navigator>
  );

  if (!isPhoneInformed) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name='UpdateUserInfo' component={UpdateUserInfo} />
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options={({ route }: { route: any }) => {
          const currentScreen = route?.state?.routes[route?.state?.index]?.name;
          return {
            swipeEnabled: currentScreen === 'CompanyList',
          };
        }}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
