# Ethereum JSONRPC External Adapter for Chainlink

- Should work for any Ethereum-based blockchain
- Supports AWS Lambda and GCP Functions
- Can sign and send transactions if client is unlocked
- Requires connection to RPC endpoint (set via `RPC_URL` environment variable)

## Install

Install dependencies

```bash
npm install
```

Create the zip

```bash
zip -r cl-jsonrpc.zip .
```

Upload to AWS/GCP

Set the `RPC_URL` environment variable to your server

## Test

Install dependencies, then run

```bash
mocha
```

Output

```
  Adapter
    Unrecognized method
      ✓ returns error to the node
    eth_syncing
      ✓ returns data to the node
    eth_getBalance
      ✓ returns data to the node
    eth_getStorageAt
      ✓ returns data to the node
    eth_sign
      ✓ returns data to the node
    eth_getProof
      ✓ returns data to the node
    eth_sendTransaction
      - returns data to the node
    eth_sendRawTransaction
      - returns data to the node


  6 passing (49ms)
  2 pending
```