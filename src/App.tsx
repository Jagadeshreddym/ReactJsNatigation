import './App.css';
import Register from './Register';
import Dashboard from './Dashboard';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  
  return(<div className="App" >
    <Router>
      <div  data-testid="load">
        <Routes>
          <Route path="/" element={<JsonPlaceHolder/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  </div>);

}


export default App;
