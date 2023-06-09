import NavComponent from "./screens/navigation/Navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { store, persistor } from "./src/storage/redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import SText from "./src/components/SText";
import { PermissionsAndroid } from "react-native";
import Toast from "react-native-toast-message";
import { DeviceEventEmitter } from "react-native";
import { useEffect } from "react";

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export default function App(props) {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<SText>Loading ...</SText>}>
          <NavComponent />
        </PersistGate>
      </Provider>
      <Toast />
    </>
  );
}
