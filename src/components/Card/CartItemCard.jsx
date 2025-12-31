import React from 'react'
import CardBase from './CardBase';
import styles from "./CartItemCard.module.scss";
import { useDispatch } from 'react-redux';
import { decrementCartItem, incrementCartItem, removeCart } from '../../store/slices/cart/cartSlice';

export default function CartItemCard({ product }) {
    const { id, image, title, price, count } = product;
    const dispatch = useDispatch();

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
    }

    const handleIncrement = (id) => {
        dispatch(incrementCartItem(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrementCartItem(id));
    }

    return (
        <CardBase
            to={`/product/${id}`}
            image={image}
            alt={`Image ${title}`}
            className={styles.card}
        >
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <button
                    onClick={() => handleRemoveCart(product.id)}
                >
                    Remove
                </button>
            </div>
            <div>
                <div>
                    <button
                        onClick={() => handleDecrement(product.id)}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => handleIncrement(product.id)}
                    >
                        +
                    </button>
                </div>
                <h3>{price}</h3>
            </div>
        </CardBase>
    )
}

// export default function CartItemCard({ product, onRemove, onIncrement, onDecrement }) {
//     const { id, image, title, price, count } = product;

//     return (
//         <CardBase
//             to={`/product/${id}`}
//             image={image}
//             alt={title}
//             className={styles.card}
//         >
//             <div className={styles.details}>
//                 <h3 className={styles.title}>{title}</h3>

//                 <div className={styles.controls}>
//                     <button onClick={() => onDecrement(id)}>-</button>
//                     <span>{count}</span>
//                     <button onClick={() => onIncrement(id)}>+</button>
//                 </div>

//                 <button className={styles.removeBtn} onClick={() => onRemove(id)}>
//                     Remove
//                 </button>
//             </div>

//             <div className={styles.price}>
//                 ${price * count}
//             </div>
//         </CardBase>
//     );
// }
