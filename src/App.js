import './App.css';
import Budget from './components/budget/Budget';
import DashHome from './components/dash-home/DashHome';
import DashBoard from './pages/dashboard/DashBoard';
import Landing_page from './pages/landingpage/Landing_page';
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/' element={<Landing_page />} />
          <Route exact path='/dashboard' element={<DashBoard />} >
            <Route path="" element={<DashHome />} />
            <Route path="budget" element={<Budget />} />
          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
