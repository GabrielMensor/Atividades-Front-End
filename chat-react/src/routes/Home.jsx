import { useState } from 'react';
import { Link } from 'react-router-dom';
console.log("Home")
export default function Home() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Bem-vindo novamente!</h1>
      <h4>Para continuar, digite o seu nome</h4>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() && (
        <Link to={`/chat/${encodeURIComponent(name)}`} className='submit-button'>
          Entrar
        </Link>
      )}
    </div>
  );
}
