const WebSocket = require('ws');

const ws = new WebSocket('wss://fstream.binance.com/ws/bnbusdt@aggTrade');

ws.onmessage = (event) => {
    const obj = JSON.parse(event.data);
    console.log(`Symbol: ${obj.s}, Bid: ${obj.b}, Ask: ${obj.a}`);
}