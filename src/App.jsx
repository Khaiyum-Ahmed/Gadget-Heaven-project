
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <div className="max-w-11/12 mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
