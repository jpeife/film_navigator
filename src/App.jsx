import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body } from './pages/Body/Body'

export const SearchValueContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState("")


  return (
    <>
      <SearchValueContext.Provider value={[searchValue, setSearchValue]}>
        <Body />
      </SearchValueContext.Provider>
    </>
  )
}

export default App
