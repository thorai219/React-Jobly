import Routes from './Routes'
import NavBar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;
