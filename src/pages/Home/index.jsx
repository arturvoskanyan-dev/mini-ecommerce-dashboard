import React, { useState } from 'react'
import Products from '../../components/Products'
import Search from '../../components/Search'
import Filter from '../../components/Filter';
import styles from "./Home.module.scss";

export default function Home() {
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    // sort: "" 
  })

  console.log(filters);


  return (
    <div className={styles.container}>
      <aside className={styles.filtersSidebar}>
        <Filter filters={filters} setFilters={setFilters} />
      </aside>
      <main className={styles.content}>
        <Search filters={filters} setFilters={setFilters} />
        <Products filters={filters} />
      </main>
    </div>
  )
}
