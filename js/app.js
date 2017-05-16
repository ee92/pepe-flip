
var contract_address = "0x7c3ff4FCC38b2B77F69DF529C2132071FcE34F81";
var contract_abi =[ { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xdcbe3b3ee7494460cb6655920412aa142ab59466" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "play", "outputs": [], "payable": true, "type": "function" }, { "constant": false, "inputs": [ { "name": "max", "type": "uint256" } ], "name": "random", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Loss", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Win", "type": "event" } ]

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var contract_instance = web3.eth.contract(contract_abi).at(contract_address);

console.log(web3.eth.accounts)

function play(){
	$("#win").hide()
	$("#loss").hide()
	$("#bet").hide()
	$("#flip").show()
	setTimeout(function(){
		if (contract_instance.Loss({})){
			console.log(contract_instance.Loss({}))
			$("#loss").show()
		}
		if (contract_instance.Win({})){
			console.log(contract_instance.Win({}))
			$("#win").show()
		}
		$("#flip").hide()
		$("#bet").show()
		$("#input").val("")
	},3000)
}