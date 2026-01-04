import React from 'react'
import styles from "./ProductDetails.module.scss";
import TruckIcon from '../../components/Icons/TruckIcon';
import ReturnIcon from '../../components/Icons/ReturnIcon';

export default function ProductDelivery() {
    return (
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
    )
}
