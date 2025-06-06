import { useEffect, useState } from 'react';

function App() {
  const [saxophones, setSaxophones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://localhost:3000/api/saxophones');
      const data = await result.json();
      setSaxophones(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Saxophones en vente</h1>
      <ul>
        {saxophones.map(saxo => (
          <li key={saxo.id}>
            <h3>{saxo.marque} - {saxo.modele} - {saxo.type}</h3>
            <p>{saxo.description}</p>
            <p>Prix : {saxo.prix} €</p>
            <img src={`/images/saxophones/${saxo.id}.jpg`} alt={saxo.modele} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
