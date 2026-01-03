export default function filterProducts(products, filters) {
    let result = products;

    // filter by category
    if(filters.category.length) {
        result = result.filter((p) => filters.category.includes(p.category));
    }

    // filter by rating
    if(filters.minRating) {
        result = result.filter((p) => p.rating.rate >= filters.minRating);
    }

    // filter by price 
    result = result.filter(
        (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    )

    return result
}