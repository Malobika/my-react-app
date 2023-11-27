import logo from './logo.svg';
import './App.css';
import ViewForm from './ViewForm';
import {useState, useEffect} from 'react';
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

  function createNodes() {
    let names = prompt('Enter name');
   
    fetch('http://localhost:8000/nodes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({names}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getNodes();
      });
  }

  function deleteNodes() {
    let id = prompt('Enter node id');
    fetch(`http://localhost:8000/nodes/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getNodes();
      });
  }

  function updateNodes() {
    let id = prompt('Enter id');
    let names = prompt('Enter new name');
   
    fetch(`http://localhost:8000/nodes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({names}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getNodes();
      });
  }
  

  useEffect(() => {
    getNodes();
    
  }, []);
  return (
    <div>
  
      <ViewForm />
    </div>
  );
}

export default App;
