pragma solidity ^0.4.10;

contract Pepeflip {
    
    address public owner;
    address public player;
    uint ent1;
    uint ent2;
    uint ent3;
    uint256 bet;
    
    function Pepeflip() {
        owner = msg.sender;
        ent3 = 0;
    }
    
    event Loss(address player, uint amount);
    event Win(address player, uint amount);
    event Refund(address player, uint amount);
    
    function random(uint max) returns (uint){
        ent1 = uint(block.blockhash(block.number-1));
        ent2 = uint(block.timestamp);
        ent3++;
        return uint(sha3(ent1+ent2+ent3))%max;
    }
    
    function play() payable {
        player = msg.sender;
        bet = msg.value;
        if (bet>1000000000000000000){
            msg.sender.transfer(bet * 99 / 100);
            Refund(player, bet * 99 / 100);
        }
        if (random(100) == 42){
            Loss(player, bet);
        }
        if (random(2) == 0) {
            Loss(player, bet);
        }
        else{
            Win(player, bet * 2);
            msg.sender.transfer(bet * 2);
        }
    }
    
    function kill(){
        if (msg.sender!=owner){
            throw;
        }
        suicide(msg.sender);
    }
    
    function() payable {
        
    }
}