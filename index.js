const WebSocket = require('ws');
const readlineSync = require('readline-sync');

const ws = new WebSocket('wss://fstream.binance.com/ws/bnbusdt@aggTrade');

const symbol = readlineSync.question('Enter the symbol: ');

ws.on('open', () => {
    ws.send(JSON.stringify({
        "method": "SUBSCRIBE",
        "params": [`${symbol.toLowerCase()}@aggTrade`],
        "id": 1
    }));
})

ws.onmessage = (event) => {
    const obj = JSON.parse(event.data);
    console.log(`Symbol: ${obj.s}, Bid: ${obj.b}, Ask: ${obj.a}`);
}