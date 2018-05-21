
var GrpcService = require ('./GrpcService.js');

var grpc_service = new GrpcService ('./OrderService.proto');

console.log (grpc_service.proto_descriptor);

var server = grpc_service.create_server ('OrderService', {
	'add_order' : grpc_service.create_service ((order) => { console.log ('add ' + order.key); return { data : 'success' }; }),
	'remove_order' : grpc_service.create_service ((order) => { console.log ('remove ' + order.key); return { data : 'success' }; })
}, 'localhost', 5050);


