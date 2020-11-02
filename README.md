# kickstart-eth-solidity-study

Project implemented while following the Udemy course https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/

To be able to use the scripts to deploy the contract (`CampaignFactory`), it's necessary to setup the `HDWallet` on `ethereum/deploy.js` file.

Then, after deploying the CampaignFactory, take the address (printed when running a successful deploy) and paste it on `ethereum/factory.js`.

Finally, on `ethereum/web3.js`, it's also necessary to paste a infura api address.