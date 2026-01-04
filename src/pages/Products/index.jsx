import React, { useState } from 'react'
import Products from '../../components/Products'
import Search from '../../components/Search'
import Filter from '../../components/Filter';
import styles from "./Products.module.scss";
import Sort from '../../components/Sort';

export default function ProductsPage() {
  const [sorts, setSorts] = useState([
    { criteria: "price", direction: "asc", enabled: false },
    { criteria: "title", direction: "asc", enabled: false },
  ])
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    sort: ""
  })

  return (
    <div className={styles.container}>
      <aside className={styles.filtersSidebar}>
        <Filter filters={filters} setFilters={setFilters} />
        <Sort sorts={sorts} setSorts={setSorts} />
      </aside>
      <main className={styles.content}>
        <div className={styles.productsControls}>
          <Search filters={filters} setFilters={setFilters} />
        </div>
        <Products filters={filters} sorts={sorts} />
      </main>
    </div>
  )
}
