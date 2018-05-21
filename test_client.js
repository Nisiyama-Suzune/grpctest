
var GrpcService = require ('./GrpcService.js');

var grpc_service = new GrpcService ('./OrderService.proto');

var stub = grpc_service.create_stub ('OrderService', 'localhost', 5050);

async function run () {

	console.log (await grpc_service.call_function (stub, 'add_order', {
		key : 'DLFDLF',
		platform : 'DLFDLF',
		symbol : 'dlf-dlf',
		price : 10.00,
		amount : 5.00
	}));
	console.log (await grpc_service.call_function (stub, 'remove_order', {
		key : 'DLFDLF',
		platform : 'DLFDLF',
		symbol : 'dlf-dlf',
		price : 10.00,
		amount : 5.00
	}));

}

run ();

