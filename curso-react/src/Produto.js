import React from 'react';

const Produto = ({ props }) => {
  return (
    <div>
      <p>{props.nome}</p>
      <p>R$ {props.preco}</p>
      <img src={props.fotos[0].src} alt={props.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
