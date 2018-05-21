
var grpc = require ('grpc');

class GrpcService {

	constructor (proto_path) {
		this.proto_descriptor = grpc.load (proto_path);
	}

	create_service (func) {
		return (call, callback) => { callback (null, func (call.request)); };
	}

	create_server (service_name, service_list, ip, port) {
		let server = new grpc.Server ();
		server.addService (this.proto_descriptor[service_name].service, service_list);
		server.bind (ip + ':' + port, grpc.ServerCredentials.createInsecure ());
		server.start ();
		return server;
	}

	create_stub (service_name, ip, port) {
		return new this.proto_descriptor[service_name] (ip + ':' + port, grpc.credentials.createInsecure ());
	}

	call_function (stub, function_name, arg) {
		return new Promise (function (resolve, reject) {
			stub[function_name] (arg, function (err, ret) {
				if (err) reject (ret);
				else resolve (ret);
			});
		});
	}

}

module.exports = GrpcService;

