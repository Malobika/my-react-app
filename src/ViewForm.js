import React from 'react';
import './ViewForm.css';

import DropdownComponent from './Dropdowncomponent';

function getNodesbyId(selectedUUID) {
  return fetch(`http://localhost:8000/nodes/${selectedUUID}`)
    .then(response => {
      return response.text();
    })
   
}

class ViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUUID: '',
      nodesData: null, // State to hold the fetched data // State to hold the selected UUID
    };}
    
  
  handleEventCategory = (event) => {
    this.setState({ selectedUUID: event.target.value }); // This will log the UUID of the selected node
  };
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Selected UUID:', this.state.selectedUUID); // Log or process the selected UUID
    // Add further form submission logic here
    getNodesbyId(this.state.selectedUUID)
      .then(data => {
        this.setState({ nodesData: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  

  render() {
    return (
       

      <div className="form-container">
        <div className="form-section">
          <h2>Nodes</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
           
            </div>
            <div className="form-group">
              <select id="nodes" name="nodes" onChange={this.handleEventCategory} value={this.state.selectedUUID}>
                <DropdownComponent/>
                
              </select>

            </div>

      

            <button type="submit">Submit</button>
            <div className="node-data">
              {this.state.nodesData}
              </div>
          </form>
        </div>

        <div className="form-section">
          <h2>Add Relationship</h2>
          <form>
            <div className="form-group">
              <label htmlFor="entityId">Entity ID *</label>
              <input type="text" id="entityId" name="entityId" required />
            </div>

            <div className="form-group">
              <label htmlFor="child">Child *</label>
              <input type="text" id="child" name="child" required />
            </div>

            <div className="form-group">
              <label htmlFor="parent">Parent *</label>
              <input type="text" id="parent" name="parent" required />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewForm;
