require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain purity gloom knock flame target'; 
let testAccounts = [
"0x3d3b41a3b68d6bcbb0c22cd46effc254f0ffeb85b77939d5477823135ebace5a",
"0x903b7c92c65b6f40f3955b0a5e80e35181dda1f9b5641c7adcd4d45e0a0a5085",
"0xf9d8431cc3e8cd2156e3ec445b7a9a5db01ea1b3e2bf8deffbc7ea3a6a2d1ea2",
"0x175b9dcc21d568e8165d27a43321f30b23fdf1fdc8bf1cf36f86861a2b98203b",
"0xe9ad4519e0d8aa4b10fdad2b19408ad8435ea8b1260d72623489ac51e8c248cb",
"0x9131374ab9ec619721a7ebd554e05365f50b6a8e82d3b882f8892adeb5d66700",
"0x9f93d778924090390073ee6c67427772af82c16abd59baa0916ba51c85a9750c",
"0x1d5e5345ff78e8d948a9f778783efa96bc5bc161b8e963d8448681d3fdb8d83b",
"0xfa926168366526379f2966d545fac9f4ff8a3da576f1925158fd1ebe30854c5c",
"0xbcd61c6acf9a651268b14e632924f544f5b0bbe5dc35bf28aaae136a7055dca0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
