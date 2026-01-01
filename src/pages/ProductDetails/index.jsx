import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../../store/slices/products/productsThunk';
import CardBase from '../../components/Card/CardBase';
import styles from "./ProductDetails.module.scss";
import StarIcon from '../../components/Icons/Star';
import { addToCart, decrementCartItem, incrementCartItem } from '../../store/slices/cart/cartSlice';
import { openCart } from '../../store/slices/ui/uiSlice';
import TruckIcon from '../../components/Icons/TruckIcon';
import ReturnIcon from '../../components/Icons/ReturnIcon';

export default function ProductDetails() {
    const { id } = useParams();
    const { selectedProduct } = useSelector((state) => state.products);
    const { products } = useSelector((state) => state.cart);
    const cartItem = products.find((p) => p.id === selectedProduct.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id])

    const handleIncrement = () => {
        dispatch(incrementCartItem(selectedProduct.id))
    }

    const handleDecrement = () => {
        dispatch(decrementCartItem(selectedProduct.id));
    }

    const handleAddToCart = () => {
        dispatch(addToCart(selectedProduct));
    }

    const handleOpenCart = () => {
        dispatch(openCart());
    }


    console.log(id);

    return (
        <CardBase
            clickable={false}
            variant='productDetails'
            image={selectedProduct?.image}
            className={styles.productDetails}
        >
            <h2 className={styles?.title}>
                {selectedProduct.title}
            </h2>
            <span className={styles.ratingContent}>
                <StarIcon className={styles.starIcon} />
                <span className={styles.rating}>
                    {selectedProduct?.rating?.rate}
                </span>
                <span>
                    ({selectedProduct?.rating?.count})
                </span>
            </span>
            <h3 className={styles.price}>
                ${selectedProduct?.price}
            </h3>
            <p className={styles.description}>
                {selectedProduct?.description}
            </p>
            <div className={styles.line} />
            <div className={styles.productControls}>
                {
                    cartItem &&
                    <div className={styles.quantityControls}>
                        <button
                            className={styles.minusBtn}
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className={styles.count}>{cartItem?.count}</span>
                        <button
                            className={styles.plusBtn}
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                }
                {
                    !cartItem ?
                        <button
                            className={styles.productBtn}
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                        : <button
                            className={styles.productBtn}
                            onClick={handleOpenCart}
                        >
                            In the cart
                        </button>
                }
            </div>
            <div className={styles.delivery}>
                <div className={styles.deliveryItem}>
                    <TruckIcon className={styles.deliveryIcon} />
                    <div className={styles.deliveryDetails}>
                        <h3 className={styles.deliveryTitle}>
                            Free Delivery
                        </h3>
                        <p className={styles.deliveryDescription}>
                            Enter your postal code for Delivery Availability
                        </p>
                    </div>
                </div>
                <div className={styles.deliveryItem}>
                    <ReturnIcon className={styles.deliveryIcon} />
                    <div className={styles.deliveryDetails}>
                        <h3 className={styles.deliveryTitle}>
                            Return Delivery
                        </h3>
                        <p className={styles.deliveryDescription}>
                            Free 30 Days Delivery Returns. Details
                        </p>
                    </div>
                </div>
            </div>
        </CardBase >
    )
}
