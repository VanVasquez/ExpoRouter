import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
const users = [
  { username: "van", name: "van vincent" },
  { username: "samson", name: "smasnug" },
  { username: "john", name: "john doe" },
];

const search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        {users.map((user) => (
          <Link
            style={styles.link}
            key={user.username}
            href={{
              pathname: `/${user.username}`,
              params: {
                name: `${user.name}`,
              },
            }}
          >
            View {user.name}'s profile
          </Link>
        ))}
      </View>
    </View>
  );
};

export default search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
