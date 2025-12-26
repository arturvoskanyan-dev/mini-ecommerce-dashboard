import React, { useEffect } from 'react'
import styles from "./Products.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/products/productsThunk';

export default function Products() {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // console.log(products, loading, error);
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error... {error}</div>

    return (
        <div className={styles.productsContainer}>
            {
                products?.map((product) => (
                    <div key={product.id}>
                        {product.title}
                    </div>
                ))
            }
        </div>
    )
}
