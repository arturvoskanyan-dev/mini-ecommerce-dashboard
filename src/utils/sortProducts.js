export default function sortProducts(products, sorts) {
    return [...products].sort((a, b) => {
        for (const sort of sorts) {
            if (!sort.enabled) continue;

            const { criteria, direction } = sort;
            let comparison = 0;

            if (criteria === "title") {
                if (a.title < b.title) comparison = -1;
                if (a.title > b.title) comparison = 1;
            }

            if (criteria === "price") {
                comparison = a.price - b.price;
            }

            if (comparison !== 0) {
                return direction === 'asc' ? comparison : -comparison
            }
        }
        return 0;
    })
}