import React, { useState } from 'react';



export default function App() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: 'Repository-test-1' },
    { id: 2, name: 'Repository-test-2' },
    { id: 3, name: 'Repository-test-3' }
  ])

  return (
    <>
      <ul>
        { repositories.map(repo => <li key={ repo.id }>{ repo.name }</li>) }
      </ul>
      <button /> 
    </>
  )
}
