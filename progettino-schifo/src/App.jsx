import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarComponent from './components/NavBarComponent'
import FooterComponent from './components/FooterComponent'
import JumbotronComponent from './components/JumbotronComponent'
import AllBooksComponent from './components/AllBooksComponent'



function App() {
  const [showImage, setShowImage] = useState(true)

  return (
    <>
      <div>
        <NavBarComponent/>
        <JumbotronComponent/>
        <AllBooksComponent/>
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
