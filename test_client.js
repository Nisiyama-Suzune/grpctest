
var GrpcService = require ('./GrpcService.js');

var grpc_service = new GrpcService ('./OrderService.proto');

var stub = grpc_service.create_stub ('OrderService', 'localhost', 5050);

async function run () {

	console.log (await grpc_service.call_function (stub, 'add_order', {
		key : 'DLFDLF',
		platform : 'DLFDLF',
		symbol : 'dlf-dlf',
		price : 10.000002,
		amount : 5.000004,
	}));
	console.log (await grpc_service.call_function (stub, 'remove_order', {
		key : 'DLFDLF',
		platform : 'DLFDLF',
		symbol : 'dlf-dlf',
		price : 10.000000002,
		amount : 5.0000000004
	}));

}

run ();

