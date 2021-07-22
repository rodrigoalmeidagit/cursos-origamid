export default function initFetchBitcoin() {
  const qtBitcoin = document.querySelector('.btc-preco');
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
      const hundredDollar = Math.ceil((100 / bitcoin.BRL.sell).toFixed(4))
      qtBitcoin.innerText = hundredDollar;
    })
    .catch(erro => console.log(Erro(erro)));
};