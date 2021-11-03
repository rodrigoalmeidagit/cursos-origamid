import React from 'react';
import Produto from './Produto';

const App = () => {
  const [carregando, setCarregando] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  async function handleData(event) {
    setCarregando(true);
    const url = `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`;

    const response = await fetch(url);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button onClick={handleData}>smartphone</button>
      <button onClick={handleData}>tablet</button>
      <button onClick={handleData}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto props={dados} />}
    </div>
  );
};

export default App;