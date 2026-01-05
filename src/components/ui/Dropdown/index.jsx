import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from "./Dropdown.module.scss";

export default memo(function Dropdown({
    options,
    value,
    onChange,
    label,
    getLabel,
    getValue,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = useCallback((opt) => {
        onChange(getValue(opt));
        setIsOpen(false);
    }, [onChange, getValue]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find(
        (opt) => getValue(opt) === value
    );

    return (
        <div className={styles.dropdownWrapper} ref={dropdownRef}>
            <h3 className={styles.label}>{label}</h3>

            <button
                type="button"
                className={styles.dropdownButton}
                onClick={() => setIsOpen(prev => !prev)}
            >
                {selectedOption ? getLabel(selectedOption) : value === 0 ? "All" : "Select"}
            </button>

            {isOpen && (
                <div className={styles.dropdownContent}>
                    {options.map((opt) => (
                        <div
                            key={getValue(opt)}
                            className={styles.dropdownItem}
                            onClick={() => handleSelect(opt)}
                        >
                            {getLabel(opt)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});
