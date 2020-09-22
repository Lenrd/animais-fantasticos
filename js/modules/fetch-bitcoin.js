export default function initFetchBitcoin() {}

async function fetchBitcoin() {
  try {
    const bitcoinResponse = await fetch("https://blockchain.info/ticker");
    const bitcoinJson = await bitcoinResponse.json();
    const { BRL } = bitcoinJson;
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.textContent = (100 / BRL.sell).toFixed(4);
  } catch (err) {
    console.error(
      "Infelizmente o serviço de pagamento pode estar offline, tente mais tarde!"
    );
  }
}

fetchBitcoin();
