import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Limpar from './Limpar';
import Produto from './Produto';

function App() {

  return (
    <GlobalStorage>
      <Limpar />
      <Produto />
    </GlobalStorage>
  )
}

export default App;
