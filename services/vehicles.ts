import axios from "axios"
import { SERVER_URL } from "../constants"
export async function getVehicles() {
    const res = await axios.get(SERVER_URL + "/vehicles/all")
    return res
}

export async function getImagesById(id: number) {
    const res = await axios.get(SERVER_URL + `/vehicles/images/list/${id}`)
    return res
}

export async function getVehicleById(id: number) {
    const res = await axios.get(SERVER_URL + `/vehicles/one/${id}`)
    return res
}