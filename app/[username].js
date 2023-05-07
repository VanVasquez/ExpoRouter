import { Stack, useRouter, useSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

const profile = () => {
  const router = useRouter();
  const { name, username } = useSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ title: name }} />

      <Text style={{ fontSize: 30 }}>Welcome @{username}</Text>
      <Button
        onPress={() => {
          router.back();
        }}
        title="Go back"
      />
    </View>
  );
};

export default profile;
