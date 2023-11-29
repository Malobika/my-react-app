import React, { useState } from 'react';
import './GrowFormulaForm.css'; // Make sure to import your CSS file

import { useNavigate } from 'react-router-dom';

function GrowFormulaGroupForm() {
  const [formData, setFormData] = useState({ grow_formula_group_name: '', comment: '' });
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/view-form'); // Navigate to the path of the next page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/insert-grow-formula-group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data successfully inserted into the "grow_formula_group" table
        console.log('Data inserted successfully');
      } else {
        // Handle errors
        console.error('Failed to insert data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div>
      <h2>Grow Formula Group Name</h2>
      <input
        type="text"
        placeholder="Grow Formula Group Name"
        value={formData.grow_formula_group_name}
        onChange={(e) => setFormData({ ...formData, grow_formula_group_name: e.target.value })}
      />

      </div>
     <div>
     <h2>Comment</h2>
      <input
        type="text"
        placeholder="Comment"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />

     </div>
     
      <button type="submit">Submit</button> <button type="button" onClick={goToNextPage}>Next</button>
    </form>
    
    </div>
    
    
  );
}

export default GrowFormulaGroupForm;
