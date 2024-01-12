# Examples

## Supported Tokens

Let's see the supported tokens [file](./src/supportedTokens.ts) under the src folder.
That script connect with fibrous router and get the informations about tokens.

Script is written with typescript (ts format), it needs to be converted to js format.
```bash
# Let's go first to the src folder
cd src
```
```bash
tsc supportedTokens.ts
```

If you don't have tsc, just install it with npm.
```bash
npm install -g typescript
```

After converting ts file to js file, you can see in src folder a new json file as **supportedTokens.js**.
Let's see which tokens we are getting...
```bash
node supportedTokens.js
```

As a result you can see bunch of tokens like below:
.
.
.
usdc: {
  address: '0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
  name: 'usd-coin',
  symbol: 'usdc',
  decimals: 6,
  price: '1.001',
  imageUrl: 'https://assets.coingecko.com/coins/images/6319/small/usdc.png?1696506694',
  valuable: true,
  verified: true
},
.
.
.

---

## Route

Let's have a look the route [file](./src/route.ts) between eth - usdc.
Again we need to convert our ts file to js file.
```bash
tsc route.ts
```

After creating the js file...
```bash
node route.js
```

As a result we get the best route from sdk like below:

route {
  success: true,
  inputToken: {
    address: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    decimals: 18,
    isBase: false,
    isNative: true,
    name: 'Ether',
    symbol: 'eth',
    price: 2252.25,
    verified: true
  },
  inputAmount: '1000000000000000000',
  outputToken: {
    address: '0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
    decimals: 6,
    isBase: false,
    isNative: false,
    name: 'usd-coin',
    symbol: 'usdc',
    price: 1,
    verified: true,
    reserve: { type: 'BigNumber', hex: '0x018204c71cd5' }
  },
  outputAmount: '2249562970',
  time: 0.366,
  estimatedGasUsed: '0',
  route: [ { percent: '100%', swaps: [Array] } ],
  bestQuotesByProtocols: [
    '0',
    '2237008599',
    '0',
    '0',
    '2249562970',
    '2249574509',
    '2182044320'
  ]
}

---

If you want to try a route with another tokens, you can change them in route.ts file...
```bash
# Input token, let's try this time usdc
const tokenInAddress = tokens["usdc"].address;

# Output token, try usdc swap to dai
const tokenOutAddress = tokens["dai"].address;

# Here is defining decimal of token, which we want to swap
const tokenInDecimals = tokens["usdc"].decimals;

# And how much we want to swap, let's try 1000$
const inputAmount = BigNumber.from(parseUnits("1000", tokenInDecimals));
```

After changing script we need to save ts file and convert again to js file.
```bash
tsc route.ts
```

```bash
node route.js
```

---

For [Account](./chapters/Account.md) instructions, please refer to the next step.