/**
 * 应用组件相关配置
 */	
require.config({
	baseUrl: 'resources/js',
	paths: {
		
	},
	shim: {
		
	}
});

/**
 * 加载组件orange、bootstrap，并启动应用
 */	
require(['orange','bootstrap'], function(orange) {
	 orange.start();
});

