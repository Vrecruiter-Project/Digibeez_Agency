import './App.css'
// import RealisticBee from './components/animatedBee/RealisticBee'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import AppRoutes from '../routes/Approutes';

function App() {

  return (
    <>
      <Nav />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App



