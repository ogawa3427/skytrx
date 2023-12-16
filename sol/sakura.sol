// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PaperEvaluation is ERC721, Ownable {

    uint256 public nextTokenId;
    uint256 public commentReward = 1 ether; // Comment reward in ether
    uint256 public reviewedReward = 2 ether; // Reviewed reward in ether
    uint256 public evaluationPeriod = 30 days;
    uint256 public minRating = 3;
    uint256 public minTotalRating = 1000;

    mapping(uint256 => address) public paperAuthors;
    mapping(uint256 => address[]) public commenters;
    mapping(uint256 => mapping(address => string)) public comments;
    mapping(uint256 => mapping(address => uint256)) public ratings;
    mapping(uint256 => mapping(address => bool)) public acceptedComments;
    mapping(uint256 => uint256) public commentCount;
    mapping(uint256 => uint256) public totalRating;
    mapping(uint256 => uint256) private _tokenCreationTimes;

    event PaperMinted(uint256 tokenId, address indexed author);
    event CommentPosted(uint256 tokenId, address indexed commenter, string comment, uint256 rating);
    event CommentAccepted(uint256 tokenId, address indexed author, address indexed commenter);
    event PaperEvaluated(uint256 tokenId, bool passed, uint256 rating);
    event PaperDeleted(uint256 tokenId);

    constructor(address initialOwner)
            ERC721("PaperToken", "PPT")
            Ownable(initialOwner)
        {}

    function mintPaper(address author) external {
        uint256 tokenId = nextTokenId++;
        _safeMint(author, tokenId);
        paperAuthors[tokenId] = author;
        _tokenCreationTimes[tokenId] = block.timestamp;
        emit PaperMinted(tokenId, author);
    }



    function postComment(uint256 tokenId, string memory comment, uint256 rating) external {
        require(ownerOf(tokenId) != msg.sender, "Authors cannot comment on their own papers");
        require(!acceptedComments[tokenId][msg.sender], "You can only comment once");
        require(rating >= 1 && rating <= 5, "Invalid rating, must be between 1 and 5");

        commenters[tokenId].push(msg.sender);
        comments[tokenId][msg.sender] = comment;
        ratings[tokenId][msg.sender] = rating;
        commentCount[tokenId]++;
        acceptedComments[tokenId][msg.sender] = true;

        emit CommentPosted(tokenId, msg.sender, comment, rating);
    }

    function acceptComment(uint256 tokenId, address commenter) external onlyOwner {
        require(paperAuthors[tokenId] == ownerOf(tokenId), "Only the author can accept comments");
        require(!acceptedComments[tokenId][commenter], "Comment already accepted");

        acceptedComments[tokenId][commenter] = true;
        payable(paperAuthors[tokenId]).transfer(commentReward);
        payable(commenter).transfer(commentReward);
        emit CommentAccepted(tokenId, ownerOf(tokenId), commenter);
    }

    function evaluatePaper(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can evaluate the paper");
        require(block.timestamp <= _tokenCreationTimes[tokenId] + evaluationPeriod, "Evaluation period expired");
        
        uint256 rating = calculateRating(tokenId);
        if (rating < minRating || (rating * commentCount[tokenId]) < minTotalRating) {
            _burn(tokenId);
            emit PaperDeleted(tokenId);
        } else {
            payable(paperAuthors[tokenId]).transfer(reviewedReward);
            emit PaperEvaluated(tokenId, true, rating);
        }
    }

    function getTokenCreationTime(uint256 tokenId) external view returns (uint256) {
        return _tokenCreationTimes[tokenId];
    }

    function calculateRating(uint256 tokenId) internal view returns (uint256) {
        return commentCount[tokenId] > 0 ? totalRating[tokenId] / commentCount[tokenId] : 0;
    }
}