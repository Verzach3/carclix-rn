import axios from "axios"
import { SERVER_URL } from "../constants"
export async function getVehicles() {
    const res = await axios.get(SERVER_URL + "/vehicles/all")
    return res
}