import 'animate.css';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Projects from './components/Projects'
import { Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/con' element={<Contact/>} />
     </Routes>
     <Footer/>
     <Toaster/>
    </>
  )
}

export default App
