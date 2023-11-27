import React, { useState, useEffect } from 'react';

// Modified getNodes function
function getNodes() {
  return fetch('http://localhost:8000')
    .then(response => response.json()) // Assuming the response is JSON. Adjust if needed.
    .then(data => data);
}

const DropdownComponent = () => {
  const [nodes, setNodes] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const fetchedNodes = await getNodes();
      setNodes(fetchedNodes);
    };

    fetchData().catch(error => console.error('Error fetching data:', error));
  }, []);

  return nodes.map(node => (
    <option key={node.uuid} value={node.uuid} defaultValue={""}>
      {node.names}
    </option>
  ));
};

export default DropdownComponent;
