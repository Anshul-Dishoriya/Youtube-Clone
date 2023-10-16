import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategory, setSelectCategory] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true)
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResults(contents)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchSelectedCategoryData(selectCategory)
  }, [selectCategory])

  return (
    <Context.Provider
      value={{
        loading, setLoading,
        searchResults, setSearchResults,
        selectCategory, setSelectCategory,
        mobileMenu, setMobileMenu
      }}>
      {props.children}
    </Context.Provider>
  )

}