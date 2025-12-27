import React, { useEffect } from 'react'
import styles from "./Products.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/products/productsThunk';
import Card from '../Card';

export default function Products({filters}) {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // console.log(products, loading, error);
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error... {error}</div>

    const filteredProducts = products?.filter((product) => (
        product.title.toLowerCase().includes(filters.search.toLowerCase())
    ))

    console.log(1);

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
