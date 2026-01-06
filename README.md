### Mini E-commerce Product Dashboard

Mini E, commerce Product Dashboard A ReactJS responsive dashboard for an online store, where users can browse products, search, filter, sort, and manage a shopping cart with the help of Redux Toolkit.

### Features

- Product data is fetched from Fake Store API using the Fetch API.
- Responsive product cards layout for desktop and mobile.
- Have the ability to add and remove products from your shopping cart.
- Shopping cart state management is implemented via RTK.
- Search function will provide different types of search matches,
    - Exact match
    - Title starts with match
    - Title contains match
    - Category match
- Sort by price and title.
- Cart state is persisted in local storage.
- Proper handling of loading and error states.

### To Run The Application

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the app: `npm run dev`
4. Open http://localhost:5173 in your browser

### Notes

- The components created are reusable and modular.
- All filtering, sorting, and cart logic has been separated into its own utility functions and Redux slices.
- Used hooks such as useMemo, memo, and useCallback to improve rendering performance.
- The entire layout is fully responsive due to the use of CSS Grid and Flexbox.
- Cart state will persist even through page refreshes as it’s stored in local storage.
- Each individual product will have its own URL for the product detail page.
