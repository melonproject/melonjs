import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MixinExchangeCoreAbi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'filled',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'cancelled',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'hash',
        type: 'bytes32',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'preSign',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'targetOrderEpoch',
        type: 'uint256',
      },
    ],
    name: 'cancelOrdersUpTo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'assetProxyId',
        type: 'bytes4',
      },
    ],
    name: 'getAssetProxy',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newData',
        type: 'bytes',
      },
    ],
    name: 'changeZRXAssetData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'validatorAddress',
        type: 'address',
      },
      {
        name: 'approval',
        type: 'bool',
      },
    ],
    name: 'setSignatureValidatorApproval',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'hash',
        type: 'bytes32',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'isValidSignature',
    outputs: [
      {
        name: 'isValid',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrder',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'salt',
        type: 'uint256',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'data',
        type: 'bytes',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'executeTransaction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'assetProxy',
        type: 'address',
      },
    ],
    name: 'registerAssetProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'getOrderInfo',
    outputs: [
      {
        components: [
          {
            name: 'orderStatus',
            type: 'uint8',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
          },
          {
            name: 'orderTakerAssetFilledAmount',
            type: 'uint256',
          },
        ],
        name: 'orderInfo',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'cancelOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'orderEpoch',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ZRX_ASSET_DATA',
    outputs: [
      {
        name: '',
        type: 'bytes',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'EIP712_DOMAIN_HASH',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'signerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'validatorAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'SignatureValidatorApproval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'feeRecipientAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'takerAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'senderAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'makerAssetFilledAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'takerAssetFilledAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'makerFeePaid',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'takerFeePaid',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'makerAssetData',
        type: 'bytes',
      },
      {
        indexed: false,
        name: 'takerAssetData',
        type: 'bytes',
      },
    ],
    name: 'Fill',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'feeRecipientAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'senderAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'makerAssetData',
        type: 'bytes',
      },
      {
        indexed: false,
        name: 'takerAssetData',
        type: 'bytes',
      },
    ],
    name: 'Cancel',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'senderAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'orderEpoch',
        type: 'uint256',
      },
    ],
    name: 'CancelUpTo',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'id',
        type: 'bytes4',
      },
      {
        indexed: false,
        name: 'assetProxy',
        type: 'address',
      },
    ],
    name: 'AssetProxyRegistered',
    type: 'event',
  },
] as AbiItem[];