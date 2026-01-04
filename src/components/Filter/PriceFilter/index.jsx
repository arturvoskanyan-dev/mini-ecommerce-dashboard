import React, { memo, useCallback, useState } from 'react'
import styles from "./PriceFilter.module.scss";
import PriceInput from './PriceInput';
import PriceRangeSlider from './PriceRangeSlider';

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
                    <PriceInput 
                        label="From"
                        value={localMin}
                        onChange={(e) => handleChange(e, "min")}
                        onBlur={handleMouseUp}
                    />
                    <PriceInput 
                        label="To"
                        value={localMax}
                        onChange={(e) => handleChange(e, "max")}
                        onBlur={handleMouseUp}
                    />
                </div>
                <PriceRangeSlider 
                    min={localMin}
                    max={localMax}
                    onChangeMin={(e) => handleChange(e, "min")}
                    onChangeMax={(e) => handleChange(e, "max")}
                    left={left}
                    width={width}
                    onMouseUp={handleMouseUp}
                />
            </div>
        </div>
    )
})