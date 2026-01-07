export default function searchProducts(products, searchInput) {
    if (!searchInput.trim()) return products;

    const search = searchInput.trim().toLowerCase();
    const exactMatches = []; // exact title match
    const titleStartsWithMatches = []; // title starts with search
    const titleContainsMatches = []; // title contains search
    const categoryMatches = []; // category contains search

    for (const product of products) {
        const titleLower = product.title.toLowerCase();
        const categoryLower = product.category.toLowerCase();

        // exact match
        if (titleLower === search) {
            exactMatches.push(product)
            continue;
        }

        // starts with search
        if (titleLower.startsWith(search)) {
            titleStartsWithMatches.push(product);
            continue;
        }

        // contains search
        if (titleLower.includes(search)) {
            titleContainsMatches.push(product);
            continue;
        }

        // category match
        if (categoryLower.includes(search)) {
            categoryMatches.push(product);
        }
    }

    return [
        ...exactMatches,
        ...titleStartsWithMatches,
        ...titleContainsMatches,
        ...categoryMatches
    ]
}