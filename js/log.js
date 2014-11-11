define('js/log',['jquery'],function(require, exports, module){
	require('jquery');

	var config = {
		info : 'info',
		error : 'error' ,
		line : 0 ,
		output : function(obj,type){
			if(typeof obj !== 'object' && typeof obj !== 'function'){
				obj = {} ;
			}
			
			if($('.console')){
				$('.console').append('<p class="'+  type +'">' + (config.line ++ ) + ' - ' + type +  ' : ' + JSON.stringify(obj) + '</p>');
			}
		}
	};
	
	var Logger = {
		info : function(){
			config.output(arguments,'info');
		},
		
		error : function(){
			config.output(arguments,'error');
		}
	};
	
	module.exports = Logger ;
});