import styled from "styled-components";
import Toast from "react-native-toast-message";

export const ToastMessage = (text) => {
    Toast.show({
        type: "success",
        text1: text,
        position: "bottom",
        visibilityTime: 2000,
    });
};