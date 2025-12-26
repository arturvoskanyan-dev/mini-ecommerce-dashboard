const BASE_URL = "https://fakestoreapi.com";

const API = {
    getProducts() {
        return fetch(`${BASE_URL}/products`)
    }
}

export default API;