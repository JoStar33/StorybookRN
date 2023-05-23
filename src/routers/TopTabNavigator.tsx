import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Menus } from "constants/menus";
import MovieRowListScreen from "screens/MovieRowListScreen/MovieRowListScreen";
import MovieScreen from "screens/MovieScreen/MovieScreen";
import SwipeListScreen from "screens/SwipeListScreen/SwipeListScreen";
import HomeScreen from "../screens/HomeScreen";
import DragableListScreen from "screens/DragableListScreen/DragableListScreen";
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Menus.Home}
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name={Menus.Home}
        component={HomeScreen}
        options={{ tabBarLabel: Menus.Home }}
      />
      <Tab.Screen
        name={Menus.Movies}
        component={MovieScreen}
        options={{ tabBarLabel: Menus.Movies }}
      />
      <Tab.Screen
        name={Menus.MovieRowList}
        component={MovieRowListScreen}
        options={{ tabBarLabel: Menus.MovieRowList }}
      />
      <Tab.Screen
        name={Menus.SwipeList}
        component={SwipeListScreen}
        options={{ tabBarLabel: Menus.SwipeList }}
      />
      <Tab.Screen
        name={Menus.DragableList}
        component={DragableListScreen}
        options={{ tabBarLabel: Menus.DragableList }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
