# Ethereum JSONRPC External Adapter for Chainlink

- Should work for any Ethereum-based blockchain
- Supports AWS Lambda and GCP Functions
- Can sign and send transactions if client is unlocked
- Takes optional connection to RPC endpoint (set via `RPC_URL` environment variable)

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

## Install to GCP

- In Functions, create a new function, choose to ZIP upload
- Click Browse and select the `cl-jsonrpc.zip` file
- Select a Storage Bucket to keep the zip in
- Function to execute: gcpservice
- Click More, Add variable
  - NAME: RPC_URL
  - VALUE: Replace_With_Something_Unique

## Install to AWS Lambda

- In Lambda Functions, create function
- On the Create function page:
  - Give the function a name
  - Use Node.js 8.10 for the runtime
  - Choose an existing role or create a new one
  - Click Create Function
- Under Function code, select "Upload a .zip file" from the Code entry type drop-down
- Click Upload and select the `cl-jsonrpc.zip` file
- Handler should remain index.handler
- Add the environment variable:
  - Key: RPC_URL
  - Value: Replace_With_Something_Unique
- Save
