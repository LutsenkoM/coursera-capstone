import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import { testContext } from "./context/testContext.js";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
          <testContext.Provider value={{test: "test"}}>
              <>
                  <Header />
                  <MainBody />
                  <Footer />
              </>
          </testContext.Provider>
      </div>
    </Router>
  )
}

export default App
