(function(){
	'use strict';
	Polymer('audio-node', {
		initNode: function(context) {},
		initConnections: function() {
			var destinationIds = this.getAttribute('connect');
			var destinationList = destinationIds.split(/ +/);
			for (var i = 0; i < destinationList.length; i++) {
				var destinationId = destinationList[i];
				if (destinationId == "destination") {
					this.node.connect(this.context.destination);
				} else {
					var destinationElement = document.getElementById(destinationId);
					if (destinationElement.node) {
						this.node.connect(destinationElement.node);
					} else {
						console.log("Error: attempted to connect to non audioNode:", destinationElement);
					}
				}
			}
		}
	});
})();