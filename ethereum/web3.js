import Web3 from 'web3';

let web3;

const ethEnabled = () => {
    if (typeof window !== 'undefined'){
        console.log('metamask');
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            web3 = window.web3
            window.ethereum.enable();
            return true;
        }
        return false;
    } else {
        console.log('serverside');
        const provider = new Web3.providers.HttpProvider(
            // INFURA endpoint
            );
        web3 = new Web3(provider);
    }
}
ethEnabled()

export default web3;
