import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xDdB07854875d2c15594B170bBa134A4f860602B4'
);

export default instance;