import React, { useState } from 'react'
import Products from '../../components/Products'
import Search from '../../components/Search'
import Filter from '../../components/Filter';

export default function Home() {
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    minPrice: 0,
    maxPrice: 1000,
    // sort: "" 
  })

  console.log(filters);
  

  return (
    <>
      <Search filters={filters} setFilters={setFilters} />
      <Filter filters={filters} setFilters={setFilters} />
      <Products filters={filters} />
    </>
  )
}
