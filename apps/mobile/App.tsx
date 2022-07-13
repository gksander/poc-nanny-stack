import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
  const todosQuery = trpc.useQuery(["getTodos"]);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-3 flex-1">
        <Text className="text-4xl text-primary">My TODOs</Text>
        <View>
          {todosQuery.data?.map((item) => (
            <View key={item.id}>
              <Text>
                "{item.title}" {item.isComplete ? "is" : "IS NOT"} complete
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
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
