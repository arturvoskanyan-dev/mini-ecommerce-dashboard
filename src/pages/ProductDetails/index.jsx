import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../../store/slices/products/productsThunk';

export default function ProductDetails() {
    const {id} = useParams();
    const {selectedProduct} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id])

    console.log(selectedProduct);
    

    return (
        <div>
            {selectedProduct.title}
        </div>
    )
}
