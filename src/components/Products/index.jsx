import React, { useCallback, useEffect, useMemo } from 'react'
import styles from "./Products.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/products/productsThunk';
import ProductCard from '../Card/ProductCard';
import { addToCart, decrementCartItem, incrementCartItem } from '../../store/slices/cart/cartSlice';
import searchProducts from '../../utils/searchProducts';
import sortProducts from '../../utils/sortProducts';
import filterProducts from '../../utils/filters';

export default function Products({ filters, sorts }) {
    const { products, loading, error } = useSelector((state) => state.products);
    const cartProducts = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // filter products and use useMemo to avoid re-renders
    const filteredProducts = useMemo(() => {
        if (!products) return [];

        let result = products;

        if (filters.search) {
            result = searchProducts(result, filters.search);
        }
        result = filterProducts(result, filters);
        result = sortProducts(result, sorts)

        return result;
    }, [products, filters, sorts])

    const cartMap = useMemo(() => {
        const map = new Map();
        cartProducts.forEach((p) => {
            map.set(p.id, p);
        })
        return map;
    }, [cartProducts])

    const handleAddToCart = useCallback((product) => {
        dispatch(addToCart(product));
    }, [dispatch]);

    const handleIncrement = useCallback((id) => {
        dispatch(incrementCartItem(id));
    }, [dispatch]);

    const handleDecrement = useCallback((id) => {
        dispatch(decrementCartItem(id));
    }, [dispatch])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error... {error}</div>

    return (
        <div className={styles.container}>
            {
                filteredProducts?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cartItem={cartMap.get(product.id)}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onAddToCart={handleAddToCart}
                    />
                ))
            }
        </div>
    )
}
