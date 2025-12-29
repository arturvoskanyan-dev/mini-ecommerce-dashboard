import React, { useState } from 'react'
import styles from "./Filter.module.scss";

export default function PriceFilter({ min, max, onChange }) {
    const [localMin, setLocalMin] = useState(min);
    const [localMax, setLocalMax] = useState(max);

    // update filters only on mouse release to avoid unnecessary re-renders
    const handleMouseUp = () => {
        onChange(localMin, localMax)
    }

    const handleChange = (e, type) => {
        const value = +e.target.value;

        if (/^\d*$/.test(value)) {
            type === "min"
                ? setLocalMin(Math.min(value, localMax))
                : setLocalMax(Math.max(value, localMin));
        }
    }

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Price</h3>
            <div className={styles.priceFilter}>
                <div className={styles.priceContent}>
                    <div className={styles.priceInfo}>
                        <h3>From</h3>
                        <input
                            type='text'
                            value={localMin}
                            onChange={(e) => handleChange(e, "min")}
                            onBlur={handleMouseUp}
                            className={styles.priceInput}
                        />
                    </div>
                    <div className={styles.priceInfo}>
                        <h3>To</h3>
                        <input
                            type='text'
                            value={localMax}
                            onChange={(e) => handleChange(e, "max")}
                            onBlur={handleMouseUp}
                            className={styles.priceInput}
                        />
                    </div>
                </div>
                <div className={styles.priceInputs}>
                    <input
                        type="range"
                        min={0}
                        max={1000}
                        value={localMin}
                        onChange={(e) => handleChange(e, "min")}
                        onMouseUp={handleMouseUp}
                    />

                    <input
                        type="range"
                        min={0}
                        max={1000}
                        value={localMax}
                        onChange={(e) => handleChange(e, "max")}
                        onMouseUp={handleMouseUp}
                    />
                </div>
            </div>
        </div>
    )
}
