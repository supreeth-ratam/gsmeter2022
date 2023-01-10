import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar.jsx/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MainContent from './components/MainContent/MainContent'
import SportsPage from './components/MainContent/SportsPage'
import TechnicalPage from './components/MainContent/TechnicalPage'
import AcadsUgPage from './components/MainContent/AcadsUgPage'
import AcadsPgPage from './components/MainContent/AcadsPgPage'
import HostelPage from './components/MainContent/HostelPage'
import CulturalPage from './components/MainContent/CulturalPage'
import Experiment from './components/MainContent/Experiment'

function App() {
  

  return (
    <div className="App">
      <Router >
        <Navbar/>
      <Sidebar />

      <Routes>
        <Route path='/' element={<MainContent/> } />
        <Route path='/culturals' element={<CulturalPage/> } />
        <Route path='/sports' element={<SportsPage/> } />
        <Route path='/acadsug' element={<AcadsUgPage/> } />
        <Route path='/acadspg' element={<AcadsPgPage/> } />
        <Route path='/hostel' element={<HostelPage/> } />
        <Route path='/technical' element={<TechnicalPage/> } />
        <Route path='/exp' element={<Experiment/> } />
        </Routes>
        {/* <Footer/> */}
      </Router>
      
    </div>
  )
}

export default App
