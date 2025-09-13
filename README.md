# Binance WebSocket AggTrade Listener

Este script em **Node.js** conecta-se ao WebSocket da Binance para escutar eventos de **trades agregados (aggTrade)** de um par escolhido pelo usuário.

## Pré-requisitos

* Node.js instalado
* Dependências:

  ```bash
  npm install ws readline-sync
  ```

## Uso

1. Execute o script:

   ```bash
   node index.js
   ```

2. Digite o **símbolo** desejado (exemplo: `bnbusdt`, `btcusdt`, etc).

3. O programa exibirá em tempo real as informações dos trades recebidos da Binance.

## Exemplo de saída

```
Enter the symbol: btcusdt
Symbol: BTCUSDT, Bid: 24950.12, Ask: 24950.13
Symbol: BTCUSDT, Bid: 24951.00, Ask: 24951.01
...
```
