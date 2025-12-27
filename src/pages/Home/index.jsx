import React, { useState } from 'react'
import Products from '../../components/Products'
import Search from '../../components/Search'

export default function Home() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: 0,
    maxPrice: Infinity,
    // sort: "" 
  })

  console.log(filters);
  

  return (
    <>
      <Search filters={filters} setFilters={setFilters} />
      <Products filters={filters} />
    </>
  )
}
