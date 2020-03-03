// BottomTabNavigator
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { useSafeArea } from "react-native-safe-area-context";
import color from "color";
import overlay from "./utils/overlay";

import { Feed } from "./Feed";
import { Messages } from "./Messages";
import { Notifications } from "./Notifications";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = props => {
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();
  const theme = useTheme();
  const tabBarColor = theme.dark
    ? overlay(6, theme.colors.surface)
    : theme.colors.surface;

  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : "Feed";

  let icon = "feather";
  switch (routeName) {
    case "Messages":
      icon = "email-plus-outline";
      break;
    default:
      icon = "feather";
      break;
  }

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting={true}
        sceneAnimationEnabled={false}
        backBehavior="initialRoute"
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: "home-account",
            tabBarColor
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: "bell-outline",
            tabBarColor
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: "message-text-outline",
            tabBarColor
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: "absolute",
            bottom: safeArea.bottom + 65,
            right: 16
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary
            }
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};
