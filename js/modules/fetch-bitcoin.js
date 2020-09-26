export default async function fetchBitcoin(url, target) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJson = await bitcoinResponse.json();
    const { BRL } = bitcoinJson;
    const btcPreco = document.querySelector(target);
    btcPreco.textContent = (100 / BRL.sell).toFixed(4);
  } catch (err) {
    console.error(
      "Infelizmente o serviço de pagamento pode estar offline, tente mais tarde!"
    );
  }
  fetchBitcoin();
}
