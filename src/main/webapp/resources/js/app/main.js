/**
 * 应用组件相关配置
 */	
require.config({
	baseUrl: 'resources/js',
	paths: {
		orange:'app/orange',
		jquery:'plugins/jquery/jquery.min',
		
	},
	shim: {
		
	}
});

/**
 * 加载组件orange、bootstrap，并启动应用
 */	
require(['orange'], function(orange) {
	 orange.start();
});

