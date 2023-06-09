import { StyleSheet } from "react-native";
import { mixinStyle } from "styles/mixinStyle";

export const successDialogStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    ...mixinStyle.dialog,
  },
  modalText: {
    color: "black",
    marginBottom: 15,
    textAlign: "center",
  },
});
