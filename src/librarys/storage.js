import * as SecureStore from "expo-secure-store";

export const setStorage = async (key, value) => {
    return await SecureStore.setItem(key, JSON.stringify(value));
}

export const getStorage = async (key) => {
    const result = await SecureStore.getItem(key);
    return result && JSON.parse(result);
}

export const removeStorage = async (key) => {
    return await SecureStore.removeItem(key);
}