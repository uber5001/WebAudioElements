(function(){
	'use strict';
	var AudioContext = AudioContext || webkitAudioContext;
	Polymer('audio-context', {
		created: function() {
			this.context = new AudioContext();
			this.onMutation(this, this.childrenUpdated);
		},
		childrenUpdated: function(observer, mutations) {
			for (var m = 0; m < mutations.length; m++) {
				var mutation = mutations[m];
				if (mutation.type == "childList") {
					console.log(mutation);
					for (var i = 0; i < mutations.removedNodes.length; i++) {
						var removedNode = mutations.removedNodes[i];
						console.log('Node was removed from context, but not handled!');
					}
					for (var i = 0; i < mutations.addedNodes.length; i++) {
						var addedNode = mutations.addedNodes[i];
						console.log('Node was added to context, but not handled!');
					}
				} else {
					console.log("Unexpected mutation type:", mutation.type);
				}
			}
		},
		domReady: function() {
			for (var i = 0; i < this.children.length; i++) {
				var child = this.children[i];
				if (child.initNode) {
					child.initNode(this.context);
				} else {
					console.log('Error: missing initNode on', child);
				}
			}
			for (var i = 0; i < this.children.length; i++) {
				var child = this.children[i];
				if (child.initConnections) {
					child.initConnections(this.context);
				} else {
					console.log('Error: missing initConnections on', child);
				}
			}
		},
		attributeChanged: function(attrName, oldVal, newVal) {
			console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
		}
	});
})();