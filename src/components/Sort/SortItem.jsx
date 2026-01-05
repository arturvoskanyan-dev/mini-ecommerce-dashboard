import React from 'react'
import styles from "./Sort.module.scss";
import Dropdown from '../ui/Dropdown';

export default function SortItem({ label, criteria, onChange, options, value }) {
    return (
        <div className={styles.sortItem}>
            <Dropdown
                label={label}
                options={options}
                value={value}
                onChange={onChange}
                getLabel={(opt) => opt.label}
                getValue={(opt) => `${criteria}-${opt.value}`}
            />
        </div>
    )
}
