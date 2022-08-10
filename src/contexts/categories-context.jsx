import {createContext, useState, useEffect  } from 'react';

import { getCategoriesAndDocument } from '../utils/firebase/config';

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategories] = useState({})

  useEffect(()=> {
    const getCategoryMap = async() => {
      const categories = await getCategoriesAndDocument();
      setCategories(categories)

    }
    getCategoryMap()
  },[])

  return (
    <CategoriesContext.Provider value={categoriesMap}>
      {children}
    </CategoriesContext.Provider>
  )
}
