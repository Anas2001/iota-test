const { expect } = require("chai");
const { ethers } = require("hardhat");

const createNewProfileContract = async () => {
  const Profile = await ethers.getContractFactory("Profile");
  return Profile.deploy();
};

describe("Profile", function () {
  it("Should deploy contracct", async function () {
    const profile = await createNewProfileContract();
    await profile.deployed();
    expect(await profile.getCurrentIndex()).to.equal(0);
  });
  it("Should create new Profile", async function() {
    const profile = await createNewProfileContract();
    await profile.deployed();
    await profile.CreateNewUser("Alex", "Web3 Dev", 33, "https://profile.com/1");
    const user = await profile.getUserDataOfAddress(profile.signer.getAddress())
    expect(user.id.toString()).not.equal("0");
    expect(user.name).to.equal("Alex");
    expect(user.work).to.equal("Web3 Dev");
    expect(user.age.toString()).to.equal("33");
    expect(user.profileUrl).to.equal("https://profile.com/1");
    try {
      await profile.CreateNewUser("Alex", "Web3 Dev", 33, "https://profile.com/1");
    } catch(error) {
      expect(error.message).to.equal("VM Exception while processing transaction: reverted with reason string 'User already exisits'");
    }
  });
});
