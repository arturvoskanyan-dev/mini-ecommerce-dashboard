import React, { useEffect, useMemo } from 'react'
import styles from "./Products.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/products/productsThunk';
import Card from '../Card';

export default function Products({ filters }) {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // filter products and use useMemo to avoid re-renders
    const filteredProducts = useMemo(() => {
        if(!products) return [];

        let result = products;

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

        return result;
    }, [products, filters])

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
