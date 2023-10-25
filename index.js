import { serverUrl } from './config.dev.js'

let title = document.getElementById('title')
let binance = document.getElementById('binance')
let bitcoin = document.getElementById('bitcoin')
let cardano = document.getElementById('cardano')
let dogecoin = document.getElementById('dogecoin')
let ethereum = document.getElementById('ethereum')
let tether = document.getElementById('tether')
let usd = document.getElementById('usd')
let xrp = document.getElementById('xrp')

async function getPrices(){
    let currentPrices
    await fetch(serverUrl).then(res => res.json())
    .then(data => currentPrices = data)
    console.log(currentPrices)

    let timestamp = isoTimestampToDateTime(currentPrices.timestamp)
    console.log(timestamp)
    title.textContent = `Current Crypto Prices as of ${timestamp} PST`

    let binancePrice = currentPrices.binance_price
    binance.textContent = `binance_price: $${binancePrice}`

    let bitcoinPrice = currentPrices.bitcoin_price
    bitcoin.textContent = `bitcoin_price: $${bitcoinPrice}`

    let cardanoPrice = currentPrices.cardano_price
    cardano.textContent = `cardano_price: $${cardanoPrice}`

    let dogecoinPrice = currentPrices.dogecoin_price
    dogecoin.textContent = `dogecoin_price: $${dogecoinPrice}`

    let ethereumPrice = currentPrices.ethereum_price
    ethereum.textContent = `ethereum_price: $${ethereumPrice}`

    let tetherPrice = currentPrices.tether_price
    tether.textContent = `tether_price: $${tetherPrice}`

    let usdPrice = currentPrices.usd_coin_price
    usd.textContent = `usd_price: $${usdPrice}`

    let xrpPrice = currentPrices.xrp_price
    xrp.textContent = `xrp_price: $${xrpPrice}`
} 

function isoTimestampToDateTime(isoTimestamp) {
    const date = new Date(isoTimestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'America/Los_Angeles' };
    return date.toLocaleString(undefined, options);
}

getPrices()



// console.log(getPrices())