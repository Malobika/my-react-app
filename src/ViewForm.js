import React from 'react';
import './ViewForm.css';

import DropdownComponent from './Dropdowncomponent';
function getAllNames(data) {
  if (!Array.isArray(data)) {
    return []; // Return an empty array if data is not an array
  }
  
  const namesArray = data.map(item => item.names);
  return namesArray;
}
function getNodesbyId(selectedUUID) {
  return fetch(`http://localhost:8000/nodes/${selectedUUID}`)
    .then(response => {
      return response.json();
    })
   
}

class ViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUUID: '',
      nodesData: null,
      namenodes:[], // State to hold the fetched data // State to hold the selected UUID
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
        this.setState({ namenodes: getAllNames(data) });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
      console.log('Selected names:', this.state.namenodes);
      
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
             
            <div>{this.state.nodesData ? (<div>
          <h2>Children are: {this.state.namenodes.join(', ')}</h2>
         </div>) : (<p>Loading data...</p>)}
    </div>
    </div>
    </form>
    </div>

        
    </div>
    );
  }
}

export default ViewForm;
