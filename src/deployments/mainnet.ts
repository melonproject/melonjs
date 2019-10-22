import { Deployment } from '../Deployment';

const mainnet: Deployment = {
  meta: {
    deployer: '0x0d580ae50B58fe08514dEAB4e38c0DFdB0D30adC',
    timestamp: '2019-07-18T15:52:12.132Z',
    track: 'kyberPrice',
    version: '1.0.9',
    chain: 1,
    description: 'Upgrade 0x addresses',
  },
  melonContracts: {
    priceSource: '0x4559DDD9E0a567bD8AB071ac106C1bC2d0C0b6Ef',
    adapters: {
      ethfinexAdapter: '0x48525A3DD8E3cd655B21340c5474402Aa6247b85',
      kyberAdapter: '0x8CB3E810027d97BE5E890257338b9Cc755dE9c67',
      matchingMarketAdapter: '0x542F91538205FCe34c7e1538b7Ce2218655D8623',
      matchingMarketAccessor: '0x005a15d35f0153Bf27dD40Bb53ADE42e01FA877E',
      zeroExAdapter: '0x3ecfe6f8414ed517366a5e6f7f7fc74ef21caac9',
      engineAdapter: '0xF31D358eFD7B80A6733BCb850bd49BFCBEC1428A',
    },
    policies: {
      priceTolerance: '0xfA98fc8e64cC0D1338274952E7D36f1034aEA0a9',
      userWhitelist: '0x53EAb567f5fD98943FDc0891Ca4b10a31d79Ce79',
    },
    fees: {
      managementFee: '0x67d8f29C6956e591Bc43C0DCc82b87D6A6Eb76e7',
      performanceFee: '0xcc44FcFE13d4AeC61F1835Fb5F8ae7eBE06d42cD',
    },
    factories: {
      accountingFactory: '0xeA41FD17121AAC5c79717C8528ce66a8e143e0c8',
      feeManagerFactory: '0xCB9CC04622ebb6D751E3516503Bc5418d980Ef13',
      participationFactory: '0xA48227baEa91825c23b2A38B0A90CE2e2ae59987',
      policyManagerFactory: '0xe06835e09Dd3eB24433252a77Ef573E022FcfB0b',
      sharesFactory: '0xC563Fb444441fd73431384006e7A81955c0d4F89',
      tradingFactory: '0x6E57E54Ba53495066F400c026ecA1ef7FCa9Cb44',
      vaultFactory: '0x42822b1f64249154Fc82f7F6246AE7C69254F30A',
    },
    engine: '0x7CaEc96607c5c7190d63B5A650E7CE34472352f5',
    registry: '0x1Bfd21f7db126a5966d2C09492676807a68859Ba',
    version: '0x01Bde0b02740D6311e4a87CA112DeEEddb057EFB',
    ranking: '0x4CEc8B644d306CAD99340D13A9fD4A91Fa6d5417',
  },
  thirdPartyContracts: {
    exchanges: {
      kyber: {
        conversionRates: '0x798AbDA6Cc246D0EDbA912092A2a3dBd3d11191B',
        kyberNetwork: '0x9ae49C0d7F8F9EF4B864e004FE86Ac8294E20950',
        kyberNetworkProxy: '0x818E6FECD516Ecc3849DAf6845e3EC868087B755',
      },
      matchingMarket: '0x39755357759cE0d7f32dC8dC45414CCa409AE24e',
      zeroEx: '0x080bf510fcbf18b91105470639e9561022937712',
      ethfinex: {
        exchange: '0xdcdb42c9a256690bd153a7b409751adfc8dd5851',
        wrapperRegistryEFX: '',
        wrapperPairs: [],
        erc20proxy: '',
      },
    },
    tokens: [
      {
        address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
        name: 'Basic Attention Token',
        symbol: 'BAT',
        decimals: 18,
        reserveMin: 948011283052104500000,
      },
      {
        address: '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
        name: 'Digix Gold Token',
        symbol: 'DGX',
        decimals: 9,
        reserveMin: 2844909745,
      },
      {
        address: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
        name: 'Rep Token',
        symbol: 'REP',
        decimals: 18,
        reserveMin: 9051207019673427000,
      },
      {
        address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
        name: 'ZeroX Protocol Token',
        symbol: 'ZRX',
        decimals: 18,
        reserveMin: 533190906598901500000,
      },
      {
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        name: 'Eth Token',
        symbol: 'WETH',
        decimals: 18,
        reserveMin: 1000000000000000000,
      },
      {
        address: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
        name: 'Melon Token',
        symbol: 'MLN',
        decimals: 18,
        reserveMin: 7519079664649047000,
      },
      {
        address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        name: 'MakerDao',
        symbol: 'MKR',
        decimals: 18,
        reserveMin: 226909874299087780,
      },
      {
        address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
        name: 'Dai',
        symbol: 'DAI',
        decimals: 18,
        reserveMin: 123640475068590230000,
      },
      {
        address: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
        name: 'Kyber Network',
        symbol: 'KNC',
        decimals: 18,
        reserveMin: 930101522997154300000,
      },
      {
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        reserveMin: 136107584,
      },
      {
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        name: 'Wrapped BTC',
        symbol: 'WBTC',
        decimals: 8,
        reserveMin: 3542743,
      },
    ],
  },
  exchangeConfigs: {
    MatchingMarket: {
      adapter: '0x542F91538205FCe34c7e1538b7Ce2218655D8623',
      exchange: '0x39755357759cE0d7f32dC8dC45414CCa409AE24e',
      takesCustody: true,
    },
    KyberNetwork: {
      adapter: '0x8CB3E810027d97BE5E890257338b9Cc755dE9c67',
      exchange: '0x818E6FECD516Ecc3849DAf6845e3EC868087B755',
      takesCustody: false,
    },
    ZeroEx: {
      adapter: '0x3ecfe6f8414ed517366a5e6f7f7fc74ef21caac9',
      exchange: '0x080bf510fcbf18b91105470639e9561022937712',
      takesCustody: false,
    },
    Ethfinex: {
      adapter: '0x48525A3DD8E3cd655B21340c5474402Aa6247b85',
      exchange: '0xdcdb42c9a256690bd153a7b409751adfc8dd5851',
      takesCustody: true,
    },
    MelonEngine: {
      adapter: '0xF31D358eFD7B80A6733BCb850bd49BFCBEC1428A',
      exchange: '0x7CaEc96607c5c7190d63B5A650E7CE34472352f5',
      takesCustody: false,
    },
  },
};

// tslint:disable-next-line:no-default-export
export default mainnet;
