import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <MainBody />
        <Footer />
      </div>
    </Router>
  )
}

export default App
