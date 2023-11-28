import React, { useState } from 'react';
import './ViewForm.css'; // Make sure to import your CSS file

const GrowFormulaForm = () => {
  const [growFormulaGroupName, setGrowFormulaGroupName] = useState('');
  const [comment, setComment] = useState('');
  const [cycleDefinitionNotes, setCycleDefinitionNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the data here, or call an API with the form data
    console.log({ growFormulaGroupName, comment, cycleDefinitionNotes });
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <h2>Grow Formula Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="growFormulaGroupName">Grow Formula Group Name *</label>
            <input
              type="text"
              id="growFormulaGroupName"
              value={growFormulaGroupName}
              onChange={(e) => setGrowFormulaGroupName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment *</label>
            <input
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cycleDefinitionNotes">Cycle Definition Notes</label>
            <input
              type="text"
              id="cycleDefinitionNotes"
              value={cycleDefinitionNotes}
              onChange={(e) => setCycleDefinitionNotes(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GrowFormulaForm;
