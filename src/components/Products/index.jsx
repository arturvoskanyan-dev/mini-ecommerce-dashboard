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

    const filteredProducts = useMemo(() => {
        if(!products) return [];

        let result = products;

        if(filters.search) {
            result = result.filter((product) => (
                product.title.toLowerCase().includes(filters.search.toLowerCase())
            ))
        }

        if(filters.category.length > 0) {
            result = result.filter((product) => filters.category.includes(product.category));
        }

        return result;
    }, [products, filters])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error... {error}</div>

    // console.log(1);

    return (
        <div className={styles.productsContainer}>
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
