module.exports = class ProfileContract {
    web3;
    privateKey;
    abi;
    profile;
    address;
    constructor(provider, address, privateKey) {
        this.web3 = new Web3(provider);
        if(privateKey) {
            this.web3.eth.accounts.wallet.add(privateKey);
        }
        this.privateKey = privateKey;
        const profile = require("src/shared/ProfileABI.json");
        this.profile = new this.web3.eth.Contract(profile.abi, address);
        this.address = address;
    }

    async getBlance(account) {
        return this.web3.eth.getBlance(account);
    }

    async getProfileOfUser(account) {
        return this.profile.methods.getUserDataOfAddress(account).call();
    }
}