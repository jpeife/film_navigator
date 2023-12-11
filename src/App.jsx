import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body } from './pages/Body/Body'

export const SearchValueContext = createContext();
export const ShowLoadingContext = createContext();
export const ImageViewerContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [showLoading, setShowLoading] = useState(false)
  const [imageViewerSrcImage, setImageViewerSrcImage] = useState(null)


  return (
    <>
      <ImageViewerContext.Provider value={[imageViewerSrcImage, setImageViewerSrcImage]} >
        <ShowLoadingContext.Provider value={[showLoading, setShowLoading]}>
          <SearchValueContext.Provider value={[searchValue, setSearchValue]}>
            <Body />
          </SearchValueContext.Provider>
        </ShowLoadingContext.Provider >
      </ImageViewerContext.Provider>

    </>
  )
}

export default App
