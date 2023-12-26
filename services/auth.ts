import axios from "axios";
import { SERVER_URL } from "../constants";
// rimport EncryptedStorage from "react-native-encrypted-storage";
export async function login(email: string, password: string) {
    const res = await axios.post(`${SERVER_URL}/auth/login`, {
        email,
        password
    })
    console.log(res.data.access_token);
    if (res.status === 200) {
        // await EncryptedStorage.setItem("token", res.data.access_token)
        return true;
    } else {
        return false;
    }
}