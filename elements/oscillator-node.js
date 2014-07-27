(function(){
	'use strict';
	Polymer('oscillator-node', {
		initNode: function(context) {
			//This shouldn't cause an error, but it does.
			//this.super(arguments);
			this.node = context.createOscillator();
			this.node.start();
			this.context = context;
		},
		attributeChanged: function(attrName, oldVal, newVal) {
			console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
		}
	});
})();