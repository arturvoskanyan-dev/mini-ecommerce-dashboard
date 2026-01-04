import React, { memo } from 'react'
import styles from "./PriceFilter.module.scss";

export default memo(function PriceRangeSlider({
    min,
    max,
    onChangeMin,
    onChangeMax,
    onMouseUp,
    left, 
    width
}) {
    return (
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
                value={min}
                onChange={onChangeMin}
                onMouseUp={onMouseUp}
                className={styles.range}
            />
            <input
                type="range"
                min={0}
                max={1000}
                value={max}
                onChange={onChangeMax}
                onMouseUp={onMouseUp}
                className={styles.range}
            />
        </div>
    )
})
