import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = async (key) => {
    const result = await AsyncStorage.getItem(key);
    return result && JSON.parse(result);
}