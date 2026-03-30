import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [sinavlar, setSinavlar] = useState([]);

  useEffect(() => {
    // Senin AWS EC2 IP adresin
    fetch('http://18.189.3.22:5000/api/sinav')
      .then(response => response.json())
      .then(data => setSinavlar(data))
      .catch(error => console.error('Veri çekme hatası:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>☁️ AWS Bulut Bilişim Sınav Takvimi</h1>
        <p>Backend: EC2 (.NET 8.0) | Frontend: S3 (React)</p>
      </header>
      
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ders Adı</th>
              <th>Sınav Tipi</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {sinavlar.map((sinav) => (
              <tr key={sinav.id}>
                <td>{sinav.id}</td>
                <td>{sinav.dersAdi}</td>
                <td>{sinav.tip}</td>
                <td>{sinav.tarih}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;