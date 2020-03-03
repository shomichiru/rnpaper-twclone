// ALl.js
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { NotificationTweet } from "./components/NotificationTweet";
import { notificationTweets } from "./data";

function renderItem({ item }) {
  return <NotificationTweet {...item} />;
}
function keyExtractor(item) {
  return item.id.toString();
}
export const AllNotifications = () => {
  const theme = useTheme();
  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={notificationTweets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};
