import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {

  const { produto } = React.useContext(GlobalContext)
  console.log(produto);
  if (produto === null) return null
  return (
    <div>
      {produto.map((produto) =>
        <li key={produto.id}>{produto.nome}</li>
      )}
    </div>
  )
}

export default Produto
