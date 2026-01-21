import './App.css'
import Header from './Header'
import Footer from './Footer'
import MainBoby from "./MainBoby.jsx";

function App() {
  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-1">
            <Header />
            <MainBoby/>
            <Footer />
        </div>
    </div>
  )
}

export default App
