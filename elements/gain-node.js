(function(){
	'use strict';
	Polymer('gain-node', {
		initNode: function(context) {
			//This shouldn't cause an error, but it does.
			//this.super(arguments);
			this.node = context.createGain();
			this.context = context;
		},
		attributeChanged: function(attrName, oldVal, newVal) {
			console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
		}
	});
})();