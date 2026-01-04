import React, { memo, useCallback, useState } from 'react'
import styles from "./Filter.module.scss";

export default memo(function PriceFilter({ min, max, onChange }) {
    const [localMin, setLocalMin] = useState(min);
    const [localMax, setLocalMax] = useState(max);

    // update filters only on mouse release to avoid unnecessary re-renders
    const handleMouseUp = () => {
        onChange(localMin, localMax)
    }

    const handleChange = useCallback((e, type) => {
        const value = +e.target.value;

        if (/^\d*$/.test(value)) {
            type === "min"
                ? setLocalMin(Math.min(value, localMax))
                : setLocalMax(Math.max(value, localMin));
        }
    }, [localMin, localMax])

    // range calculation for dual slider hilghlight
    const left = (localMin / 10); // starting position
    const width = (localMax - localMin) / 10; // line width    

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
                <div className={styles.rangeContainer}>
                    <div className={styles.rangeTrack} />
                    <div
                        className={styles.rangeTrackHighlight}
                        style={{
                            left: `${left}%`,
                            width: `${width}%`,
                        }}
                    />
                    <input
                        type="range"
                        min={0}
                        max={1000}
                        value={localMin}
                        onChange={(e) => handleChange(e, "min")}
                        onMouseUp={handleMouseUp}
                        className={styles.range}
                    />
                    <input
                        type="range"
                        min={0}
                        max={1000}
                        value={localMax}
                        onChange={(e) => handleChange(e, "max")}
                        onMouseUp={handleMouseUp}
                        className={styles.range}
                    />
                </div>
            </div>
        </div>
    )
})