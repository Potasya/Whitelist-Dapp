export const WHITELIST_CONTRACT_ADDRESS = "0x817F5eD3e2086b3F9c36D526423ACee72F9244a8";
export const abi = [
                       {
                         "inputs": [
                           {
                             "internalType": "uint8",
                             "name": "_maxWhitelistedAddresses",
                             "type": "uint8"
                           }
                         ],
                         "stateMutability": "nonpayable",
                         "type": "constructor"
                       },
                       {
                         "inputs": [],
                         "name": "addAddressToWhitelist",
                         "outputs": [],
                         "stateMutability": "nonpayable",
                         "type": "function"
                       },
                       {
                         "inputs": [],
                         "name": "maxWhitelistedAddresses",
                         "outputs": [
                           {
                             "internalType": "uint8",
                             "name": "",
                             "type": "uint8"
                           }
                         ],
                         "stateMutability": "view",
                         "type": "function"
                       },
                       {
                         "inputs": [],
                         "name": "numAddressesWhitelisted",
                         "outputs": [
                           {
                             "internalType": "uint8",
                             "name": "",
                             "type": "uint8"
                           }
                         ],
                         "stateMutability": "view",
                         "type": "function"
                       },
                       {
                         "inputs": [
                           {
                             "internalType": "address",
                             "name": "",
                             "type": "address"
                           }
                         ],
                         "name": "whitelistedAddresses",
                         "outputs": [
                           {
                             "internalType": "bool",
                             "name": "",
                             "type": "bool"
                           }
                         ],
                         "stateMutability": "view",
                         "type": "function"
                       }
                     ];