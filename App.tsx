import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./src/assests/screens/Start";
import TodoHome from "./src/assests/screens/TodoHome";
import {StyleSheet } from "react-native";
import StatTodo from "./src/assests/screens/TodoStat/StatTodo";
import DoneTodo from "./src/assests/screens/DoneTodo/DoneTodo";
import { AuthProvider } from "./AuthContext";
import { navigationRef } from "./navigationRef";
import AddTodo from "./src/assests/screens/AddTodo/AddTodo";
import EditTodo from "./src/assests/screens/EditTodo";
const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />  
          <Stack.Screen name="StatTodo" component={StatTodo} />
          <Stack.Screen name="DoneTodo" component={DoneTodo} />
          <Stack.Screen name="AddTodo" component={AddTodo} />
          <Stack.Screen name="TodoHome" component={TodoHome} />
          <Stack.Screen name="EditTodo" component={EditTodo} />
         
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {},
});

export default App;
