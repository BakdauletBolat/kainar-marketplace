import axios from "./index";

export async function getProducts() {
    return await axios.get('/api/product/')
}

export async function getProduct(id: string) {
    return await axios.get(`/api/product/${id}`)
}