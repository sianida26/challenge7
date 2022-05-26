import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, SearchCar } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<SearchCar />} />
      </Routes>
    </Router>
  )
}

export default App;
