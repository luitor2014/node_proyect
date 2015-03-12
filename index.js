
	var luitor = require("socket.io").listen(6969);

	luitor.sockets.on("connection", arranque);

	function arranque(usuario){
		// usuario.on("data_all", emitir);
		usuario.on("data_mensaje", node_mensaje_all);
		
	}
	function node_mensaje_all(msn){
		luitor.sockets.emit("data_mensaje_client", msn);
	}



console.log("server luitor activee 2014 no-copy");