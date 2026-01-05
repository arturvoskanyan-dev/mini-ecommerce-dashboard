import React from 'react'
import styles from "./Sort.module.scss";
import Option from '../ui/Option/Option';
import Dropdown from '../ui/Dropdown';
import { SORT_CONFIG } from '../../constants/sortConfig';

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
