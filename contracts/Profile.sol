//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Profile {
    uint public index;

    struct UserData {
      uint id;
      string name;
      string work;
      uint64 age;
      string profileUrl;
    }

    mapping(address => UserData) public profiles; 

    event CreateNewProfile (uint userId, address user);

    constructor() {
        index = 0;
    }

    function CreateNewUser(string memory name, string memory work, uint64 age, string memory url) public returns(bool) {
        require(profiles[msg.sender].id == 0, "User already exisits");
        index += 1;
        UserData memory user = UserData(index, name, work, age, url);
        profiles[msg.sender] = user;
        emit CreateNewProfile(index, msg.sender);
        return true;
    } 

    function getCurrentIndex() public view returns(uint) {
        return index;
    }

    function getUserDataOfAddress(address userAddress) public view returns(UserData memory) {
        return profiles[userAddress];
    }
    
}
