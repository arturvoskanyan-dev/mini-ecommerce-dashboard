import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../../store/slices/products/productsThunk';
import CardBase from '../../components/Card/CardBase';
import styles from "./ProductDetails.module.scss";
import { addToCart, decrementCartItem, incrementCartItem } from '../../store/slices/cart/cartSlice';
import { openCart } from '../../store/slices/ui/uiSlice';
import ProductControls from './ProductControls';
import ProductInfo from './ProductInfo';
import ProductDelivery from './ProductDelivery';

export default function ProductDetails() {
    const { id } = useParams();
    const { selectedProduct } = useSelector((state) => state.products);
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id])

    const handleIncrement = useCallback(() => {
        dispatch(incrementCartItem(selectedProduct.id))
    }, [dispatch, selectedProduct.id]);

    const handleDecrement = useCallback(() => {
        dispatch(decrementCartItem(selectedProduct.id));
    }, [dispatch, selectedProduct.id]);

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(selectedProduct));
    }, [dispatch, selectedProduct]);

    const handleOpenCart = useCallback(() => {
        dispatch(openCart());
    }, [dispatch]);

    const cartItem = useMemo(() => {
        if (!selectedProduct) return null;
        return products.find((p) => p.id === selectedProduct.id);
    }, [products, selectedProduct]);

    return (
        <CardBase
            clickable={false}
            variant='productDetails'
            image={selectedProduct?.image}
            className={styles.productDetails}
        >
            <ProductInfo
                title={selectedProduct.title}
                price={selectedProduct.price}
                description={selectedProduct.description}
                rating={selectedProduct.rating}
            />

            <div className={styles.line} />

            <ProductControls
                cartItem={cartItem}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onAddToCart={handleAddToCart}
                onOpenCart={handleOpenCart}
            />
            <ProductDelivery />
        </CardBase >
    )
}
