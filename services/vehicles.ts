import axios from "axios"
import { processColor } from "react-native-reanimated"
export async function getVehicles() {
    const res = await axios.get(process.env.SERVER_URL + "/vehicles")
    return res
}