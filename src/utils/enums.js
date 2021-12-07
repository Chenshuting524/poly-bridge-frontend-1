import { TARGET_MAINNET } from '@/utils/env';

export const WalletName = {
  MetaMask: 'MetaMask',
  Math: 'Math Wallet',
  NeoLine: 'NeoLine',
  NeoLineN3: 'NeoLineN3',
  O3: 'O3',
  Binance: 'Binance',
  Cyano: 'Cyano',
  WalletConnect: 'WalletConnnect',
};

export const ChainId = {
  Poly: 0,
  Eth: TARGET_MAINNET ? 202 : 202,
  Ont: 3,
  Neo: TARGET_MAINNET ? 4 : 5,
  N3: TARGET_MAINNET ? 14 : 88,
  xDai: TARGET_MAINNET ? 20 : 206,
  Bsc: TARGET_MAINNET ? 1000006 : 1000006,
  Heco: TARGET_MAINNET ? 207:207,
  Ok: TARGET_MAINNET ? 1012 : 1012,
  Palette: TARGET_MAINNET ? 208 : 208,
  Polygon: TARGET_MAINNET ? 20016 : 20016,
  Arbitrum: TARGET_MAINNET ? 300 : 300,
  Optimistic: TARGET_MAINNET ? 200 : 200,
  Fantom: TARGET_MAINNET ? 400: 400,
  Avalanche: TARGET_MAINNET ? 500 : 500,
  goerli: TARGET_MAINNET ? 502 : 502,
  rinkeby: TARGET_MAINNET ? 402 : 402,
  Kovan: TARGET_MAINNET ? 302 : 302,
};

export const SingleTransactionStatus = {
  Failed: -1,
  Pending: 1,
  Done: 2,
};

export const TransactionStatus = {
  Failed: -1,
  Finished: 0,
  Pending: 1,
  SourceDone: 2,
  SourceConfirmed: 3,
  PolyConfirmed: 4,
};
