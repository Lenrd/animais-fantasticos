export default async function fetchBitcoin(url, target) {
  try {
    const bitcoinResponse = await fetch(url);
    const brl = await bitcoinResponse.json();
    const btcPreco = document.querySelector(target);
    btcPreco.textContent = (100 / brl.last).toFixed(4);
  } catch (err) {
    console.error(
      "Infelizmente o serviço de pagamento pode estar offline, tente mais tarde!"
    );
  }
}
