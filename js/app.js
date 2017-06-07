
var contract_address = '0x666fD9b7181a1B7aD9e94dEB3AF3edE237091CEe';
var contract_abi = [ 
{ 
	"constant": false,
	"inputs": [], 
	"name": "kill", 
	"outputs": [], 
	"payable": false, 
	"type": "function" 
}, 
{ 
	"constant": true,
	"inputs": [],
	"name": "player", 
	"outputs": [ 
		{ "name": "", 
	 	"type": "address"
	} ],
	"payable": false, 
	"type": "function" 
}, 
{ 
	"constant": true, 
	"inputs": [], 
	"name": "owner", 
	"outputs": [ { 
		"name": "", 
		"type": "address", 
		"value": "0x00ebe4e3f457d4fd6beb8bb369924942221a544c"
	} ], 
	"payable": false, 
	"type": "function" 
}, 
{ 
	"constant": false, 
	"inputs": [], 
	"name": "play", 
	"outputs": [], 
	"payable": true, 
	"type": "function" 
}, 
{ 
	"constant": false, 
	"inputs": [ { "name": "max", "type": "uint256" } ], 
	"name": "random", 
	"outputs": [ { "name": "", "type": "uint256" } ], 
	"payable": false, 
	"type": "function" 
}, 
{ 
	"inputs": [], 
	"payable": false,
	"type": "constructor" 
}, 
{ 
	"payable": true, 
	"type": "fallback" 
}, 
{ 
	"anonymous": false, 
	"inputs": [ 
		{ "indexed": false, "name": "player", "type": "address" }, 
		{ "indexed": false, "name": "amount", "type": "uint256" } 
	], 
	"name": "Loss", 
	"type": "event" 
}, 
{
	"anonymous": false, 
	"inputs": [
		{ "indexed": false, "name": "player", "type": "address" }, 
		{ "indexed": false, "name": "amount", "type": "uint256" } 
	], 
	"name": "Win", 
	"type": "event" 
}, 
{ 
	"anonymous": false, 
	"inputs": [ 
		{ "indexed": false, "name": "player", "type": "address" }, 
		{ "indexed": false, "name": "amount", "type": "uint256" } 
	], 
	"name": "Refund", 
	"type": "event" 
} ]

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var contract_instance = web3.eth.contract(contract_abi).at(contract_address);

player = web3.eth.accounts[0]
console.log(player)

$("button").click(function(){
	console.log(contract_instance.play.call())	
})


// web3.eth.sendTransaction(transactionObject [, callback])

// function play(){
// 	$("#win").hide()
// 	$("#loss").hide()
// 	$("#bet").hide()
// 	$("#flip").show()
// 	setTimeout(function(){
// 		if (contract_instance.Loss({})){
// 			console.log(contract_instance.Loss({}))
// 			$("#loss").show()
// 		}
// 		if (contract_instance.Win({})){
// 			console.log(contract_instance.Win({}))
// 			$("#win").show()
// 		}
// 		$("#flip").hide()
// 		$("#bet").show()
// 		$("#input").val("")
// 	},3000)
// }