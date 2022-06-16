import React, { createContext, useState } from 'react';
import SHOP_DATA from '../shop';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {
        children
      }
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;

// whats going on above is basically -> importing the shop data from index.js -> created a constant called 'productcontextprovider' -> initialized the shop data and -> provide the
// products as a value -> and return the children.
