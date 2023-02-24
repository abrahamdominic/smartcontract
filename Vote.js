// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // State variables
    address public owner;
    mapping (bytes32 => uint256) public votesReceived;
    bytes32[] public candidateList;

    // Constructor
    constructor() {
        owner = msg.sender;
        candidateList.push("Candidate 1");
        candidateList.push("Candidate 2");
        candidateList.push("Candidate 3");
    }

    // Modifier to restrict access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this operation");
        _;
    }

    // Functions
    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate), "Invalid candidate");
        votesReceived[candidate] += 1;
    }

    function totalVotesFor(bytes32 candidate) view public returns (uint256) {
        require(validCandidate(candidate), "Invalid candidate");
        return votesReceived[candidate];
    }

    function addCandidate(bytes32 candidate) public onlyOwner {
        require(!validCandidate(candidate), "Candidate already exists");
        candidateList.push(candidate);
    }

    function getNumCandidates() public view returns (uint256) {
        return candidateList.length;
    }

    function validCandidate(bytes32 candidate) view public returns (bool) {
        for (uint256 i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
}
