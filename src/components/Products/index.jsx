import React, { useEffect, useMemo } from 'react'
import styles from "./Products.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/products/productsThunk';
import Card from '../Card';

export default function Products({ filters, sorts }) {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // filter products and use useMemo to avoid re-renders
    const filteredProducts = useMemo(() => {
        if(!products) return [];

        let result = products;

                                /* Filter */
        // filter by search query
        if(filters.search) {
            result = result.filter((product) => (
                product.title.toLowerCase().includes(filters.search.toLowerCase())
            ))
        }

        //filter by selected categories
        if(filters.category.length > 0) {
            result = result.filter((product) => filters.category.includes(product.category));
        }

        // filter by minimum rating
        if(filters.minRating > 0) {
            result = result.filter((product) => product.rating.rate >= filters.minRating);
        }
        
        // filter by price range
        result = result.filter((product) => (
            product.price >= filters.minPrice &&
            product.price <= filters.maxPrice
        ))

                                /* Sort */        
        result.sort((a, b) => {
            for(const sort of sorts) {
                if(!sort.enabled) continue;

                const {criteria, direction} = sort;
                let comparison = 0;

                if(criteria === "title") {
                    if(a.title < b.title) comparison = -1;
                    if(a.title > b.title) comparison = 1;
                }

                if(criteria === "price") {
                    comparison = a.price - b.price;
                }

                if(comparison !== 0) {
                    return direction === 'asc' ? comparison : -comparison
                }
            }
            return 0;
        })

        return result;
    }, [products, filters, sorts])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error... {error}</div>

    console.log(1);

    return (
        <div className={styles.container}>
            {
                filteredProducts?.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                    />
                ))
            }
        </div>
    )
}
