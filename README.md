# smartcontract

Ethereum Smart Contract Example


abrahamdominic005@gmail.com
Write a smart contract in etherum 

Sure, here is an example smart contract in Ethereum:

scss
Copy code
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
This is a basic smart contract for a voting system, where candidates can be added and users can vote for a candidate. Here's a brief explanation of the different parts:

pragma solidity ^0.8.0; specifies the version of Solidity being used
contract Voting is the name of the smart contract
address public owner is a state variable that stores the address of the contract owner
mapping (bytes32 => uint256) public votesReceived is a mapping that associates each candidate with the number of votes they have received
bytes32[] public candidateList is an array that stores the list of candidates
constructor() is the constructor function that runs when the contract is deployed, which initializes the owner and candidate list
modifier onlyOwner() is a modifier that restricts access to certain functions to the owner of the contract
function voteForCandidate(bytes32 candidate) is a function that allows a user to vote for a candidate
function totalVotesFor(bytes32 candidate) view public returns (uint256) is a function that returns the total number of votes received by a given candidate
function addCandidate(bytes32 candidate) public onlyOwner is a function that allows the owner to add a new candidate to the list
function getNumCandidates() public view returns (uint256) is a function that returns the total number of candidates in the list
function validCandidate(bytes32 candidate) view public returns (bool) is a function that checks if a given candidate is valid (i.e. exists in the candidate list)
