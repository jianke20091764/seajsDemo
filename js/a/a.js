define('js/a/a',['js/log','jquery'],function(require,exports,module){
	var logger = require('js/log');
	require('jquery');
	
	var page = {
		load : function(){
			logger.info('js/a/a.js loading ...');
			this.build();			
		},
		
		build : function(){
			logger.info('js/a/a.js building ...');
			for(var i = 0 ; i < 100 ; i ++ ){
				if( i % 2 == 0){
					logger.info('js/a/a.js build ' + i + ' ... ');
				}else{
					logger.error('js/a/a.js build ' + i + ' ... ');
				}				
			}
		}
	};
	
	$(function(){
		page.load();
	});
	
});