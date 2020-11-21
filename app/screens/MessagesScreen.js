import React, { useState } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "Rachit Kapoor",
    description: "How old is it?",
    image: require("../assets/picture.jpeg"),
  },
  {
    id: 2,
    title: "Punit Pundir",
    description: "Is it still available?",
    image: require("../assets/formal.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Punit Pundir",
              description: "Is it still available?",
              image: require("../assets/formal.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
