import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body } from './pages/Body/Body'

export const SearchValueContext = createContext();
export const ShowLoadingContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [showLoading, setShowLoading] = useState(false)


  return (
    <>
      <ShowLoadingContext.Provider value={[showLoading, setShowLoading]}>
        <SearchValueContext.Provider value={[searchValue, setSearchValue]}>
          <Body />
        </SearchValueContext.Provider>
      </ShowLoadingContext.Provider >
    </>
  )
}

export default App
