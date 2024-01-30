// Learn.js
import React, { useState, useEffect } from 'react';
import './Learn.css';

export default function Learn() {
  const [introText, setIntroText] = useState('');


  useEffect(() => {
    // Fetch introduction text from the backend
    fetch('http://localhost:8081/api/intro')
      .then((response) => response.json())
      .then((data) => setIntroText(data.text))
      .catch((error) => console.error('Error fetching introduction:', error));
  });

  return (
    <div className="containerLearn">
      <h1>Welcome to English Learning Journey!</h1>
      {/* Display the fetched introduction text */}
      <p>{introText}</p>

      <h2>Ce vei învăța</h2>
  <p>
    În acest curs, vei explora o gamă de timpuri verbale, permițându-ți să te exprimi
    în mod precis și încrezător în diferite situații. De la simplitatea
    prezentului simplu la nuanțele trecutului perfect continuu, acoperim totul.
  </p>

  <h3>Timpuri cheie acoperite:</h3>
  <ul>
    <li>Prezent simplu</li>
    <li>Prezent continuu</li>
    <li>Prezent perfect</li>
    <li>Prezent perfect continuu</li>
    <li>Trecut simplu</li>
    <li>Trecut continuu</li>
    <li>Trecut perfect</li>
    <li>Trecut perfect continuu</li>
  </ul>

  <h2>Cum funcționează cursul</h2>
  <p>
    Fiecare timp verbal va fi prezentat într-un mod clar și concis, însoțit de
    exemple, exerciții și teste pentru a-ți consolida înțelegerea. Abordarea noastră interactivă
    asigură nu numai că înțelegi regulile, ci și că le aplici în situații de viață reală.
  </p>

  <h2>Pregătește-te să te lansezi!</h2>
  <p>
    Începe călătoria ta de învățare a limbii engleze astăzi. Fie că îți propui să-ți îmbunătățești
    abilitățile de conversație, să-ți îmbunătățești scrisul sau să te pregătești pentru examenele de limbă,
    acest curs îți va oferi cunoștințele și practica de care ai nevoie.
  </p>

</div>
  );
}
