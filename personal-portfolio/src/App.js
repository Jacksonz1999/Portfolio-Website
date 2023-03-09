import  Layout  from "./components/Layout"
import PageNotFound  from "./components/PageNotFound"
import { Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      
    </>
  )
}

export default App
