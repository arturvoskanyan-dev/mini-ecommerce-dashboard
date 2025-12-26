const BASE_URL = "https://fakestoreapi.com";

const API = {
    getProducts() {
        return fetch(`${BASE_URL}/products`)
    },
    
    getProductById(id) {
        return fetch(`${BASE_URL}/products/${id}`)
    }
}

export default API;