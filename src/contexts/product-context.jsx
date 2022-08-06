import {createContext, useState, useEffect  } from 'react';
import SHOP_DATA from '../data/shop-data.json';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [productList, setProductList] = useState([])

  useEffect(()=> {
    setProductList(SHOP_DATA)    
  },[])

  return (
    <ProductContext.Provider value={productList}>
      {children}
    </ProductContext.Provider>
  )
}