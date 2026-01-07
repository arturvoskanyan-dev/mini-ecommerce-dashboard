import React, { useCallback, useState } from 'react'
import Products from '../../components/Products'
import Search from '../../components/Search'
import Filter from '../../components/Filter';
import styles from "./Products.module.scss";
import Sort from '../../components/Sort';
import FilterSortModal from '../../components/FilterSortModal';

export default function ProductsPage() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
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
  })

  const openModal = useCallback(() => {
    setIsFilterModalOpen(true);
  }, [])

  const closeModal = useCallback(() => {
    setIsFilterModalOpen(false);
  }, [])

  return (
    <div className={styles.container}>
      {
        isFilterModalOpen && (
          <aside className={styles.modalFiltersSidebar}>
            <FilterSortModal
              filters={filters}
              setFilters={setFilters}
              sorts={sorts}
              setSorts={setSorts}
              onClose={closeModal}
              isOpen={isFilterModalOpen}
            />
          </aside>
        )
      }
      <aside className={styles.filtersSidebar}>
        <Filter filters={filters} setFilters={setFilters} />
        <Sort sorts={sorts} setSorts={setSorts} />
      </aside>
      <main className={styles.content}>
        <div className={styles.productsControls}>
          <Search filters={filters} setFilters={setFilters} onOpen={openModal} />
        </div>
        <Products filters={filters} sorts={sorts} />
      </main>
    </div>
  )
}
