import './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import HomePage from './pages/HomePage';


function ContentWrapper() {
  return(
    <Routes>
      <Route
          path="/"
          element={<HomePage />}
        />
        </Routes>
  )
}




function App() {
  return (
    <Router>
        <div className="App">
      <header className="App-header">
        <ContentWrapper />
      </header>
    </div>
    </Router>
  )
}

export default App;
