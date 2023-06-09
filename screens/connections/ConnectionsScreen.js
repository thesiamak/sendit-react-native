import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import NetworkApiComponent from "../../src/components/network/NetworkApiComponent";
import ProfileComponent from "./components/ProfileComponent";
import ConnectionListComponent from "./components/ConnectionListComponent";

const ConnectionsScreen = ({ navigation }) => {
  return (
    <NetworkApiComponent>
      <SafeAreaView>
        <View style={styles.container}>
          <ProfileComponent />
          <ConnectionListComponent/>
        </View>
      </SafeAreaView>
    </NetworkApiComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default ConnectionsScreen;
