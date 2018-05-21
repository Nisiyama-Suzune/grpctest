
var GrpcService = require ('./GrpcService.js');

var grpc_service = new GrpcService ('./OrderService.proto');

var server = grpc_service.create_server ('OrderService', {
	'add_order' : grpc_service.create_service ((order) => { console.log ('add ' + JSON.stringify (order)); return { data : 'success' }; }),
	'remove_order' : grpc_service.create_service ((order) => { console.log ('remove ' + JSON.stringify (order)); return { data : 'success' }; })
}, 'localhost', 5050);


