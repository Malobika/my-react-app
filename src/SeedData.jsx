import React, { useState, useEffect } from 'react';
import './SeedDataForm.css';
import { useNavigate } from 'react-router-dom';

// Function to fetch grow formula IDs
function getGrowFormulas() {
  return fetch('http://localhost:8000/seedgrowformulaids')
    .then(response => response.json())
    .then(data => data);
}

function SeedDataForm() {
  const [formData, setFormData] = useState({
    comment: '',
    growFormulaId: '',
    supplierSeedName: '',
    supplierName: '',
    productId: ''
  });
  const [growFormulas, setGrowFormulas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGrowFormulas().then(data => setGrowFormulas(data));
  }, []);

  const goToNextPage = () => {
    navigate('/next-page');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/seed-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data inserted successfully');
        goToNextPage();
      } else {
        console.error('Failed to insert data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Seed Data Form</h2>

        {/* ... other form fields ... */}

        {/* Grow Formula ID Dropdown */}
        <div>
          <label htmlFor="growFormulaId">Grow Formula ID:</label>
          <select
            id="growFormulaId"
            value={formData.growFormulaId}
            onChange={(e) => setFormData({ ...formData, growFormulaId: e.target.value })}
          >
            <option value="">Select a Grow Formula</option>
            {growFormulas.map((formula) => (
              <option key={formula.id} value={formula.id}>
                {formula.name}
              </option>
            ))}
          </select>
        </div>

        {/* ... remaining form fields ... */}

        
      </form>
    </div>
  );
}

export default SeedDataForm;
