import React, { useEffect, useMemo } from 'react'
import styles from "./Products.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/slices/products/productsThunk';
import ProductCard from '../Card/ProductCard';
import { addToCart, decrementCartItem, incrementCartItem } from '../../store/slices/cart/cartSlice';
import searchProducts from '../../utils/productSearch';

export default function Products({ filters, sorts }) {
    const { products, loading, error } = useSelector((state) => state.products);
    const cartProducts = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    
    // filter products and use useMemo to avoid re-renders
    const filteredProducts = useMemo(() => {
        if (!products) return [];

        let result = products;

        /* Filter */
        // filter by search query
        if (filters.search) {
            // result = result.filter((product) => (
            //     product.title.toLowerCase().includes(filters.search.toLowerCase())
            // ))
            result = searchProducts(result, filters.search)
        }

        //filter by selected categories
        if (filters.category.length > 0) {
            result = result.filter((product) => filters.category.includes(product.category));
        }

        // filter by minimum rating
        if (filters.minRating > 0) {
            result = result.filter((product) => product.rating.rate >= filters.minRating);
        }

        // filter by price range
        result = result.filter((product) => (
            product.price >= filters.minPrice &&
            product.price <= filters.maxPrice
        ))

        /* Sort */
        result.sort((a, b) => {
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

        return result;
    }, [products, filters, sorts])

    const cartMap = useMemo(() => {
        const map = new Map();
        cartProducts.forEach((p) => {
            map.set(p.id, p);
        })
        return map;
    }, [cartProducts])

    const handleIncrement = (id) => {
        dispatch(incrementCartItem(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrementCartItem(id));
    }

    console.log(cartMap);


    if (loading) return <div>Loading...</div>
    if (error) return <div>Error... {error}</div>

    console.log(1);

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
