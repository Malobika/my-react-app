import logo from './logo.svg';
import './App.css';
import ViewForm from './ViewForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react';
import GrowFormulaForm from './GrowFormulaForm';
import SeedDataForm from './SeedData';
function App() {
  const [nodes, setNodes] = useState(false);

  
  function getNodes() {
    fetch('http://localhost:8000')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setNodes(data);
      });
  }
  
  
  

  useEffect(() => {
    getNodes();
    
  }, []);
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/grow-formula-form" element={<GrowFormulaForm />} />
        <Route path="/view-form" element={<ViewForm />} />
        <Route path="/Seed-data" element={<SeedDataForm />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
