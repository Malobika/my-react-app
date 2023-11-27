import React, { useState, useEffect } from 'react';

// Modified getNodes function
function getNodes(id) {
  return fetch('http://localhost:8000/nodes/${id}')
    .then(response => response.json()) // Assuming the response is JSON. Adjust if needed.
    .then(data => data);
}
export default parentlist;
