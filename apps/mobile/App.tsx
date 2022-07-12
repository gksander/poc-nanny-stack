import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "@myapp/react";
import Constants from "expo-constants";

const localhost = `http://${Constants?.manifest?.debuggerHost
  ?.split(":")
  .shift()}:3000`;

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  url: `${localhost}/api/trpc`,
});

export default function App() {
  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
        <AppBody />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

const AppBody = () => {
  const dogsQuery = trpc.useQuery(["getDogs"]);

  return (
    <View style={styles.container}>
      <Text>My dogs</Text>
      <View>
        {dogsQuery.data?.map((dog) => (
          <View key={dog.name}>
            <Text>
              {dog.name} {dog.goodBoy ? "is" : "IS NOT"} a good boy
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
