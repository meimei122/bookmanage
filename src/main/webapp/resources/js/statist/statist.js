/**
 * 默认页面的js
 */
(function(){
	require(['orange','jquery','echarts','chart'],function(orange,jquery,echarts,chart){
		//图书信息
		//$.post("BookController/bookInfo",function(data){
			var	options1 = {
					text: '图书类型占比',
					legendData:['计算机','社会学','小说','名著','哲学'],
					seriesData: data,
					chartWrapperId: 'bookType'
				};
			chart.common(options1);
		//});
		
		//借书信息统计
		//$.post("BorrowBookController/borrowBookInfo",function(data){
			var options2 = {
					legendData: ['借书信息'],
					xData: data[0],
					seriesName: '借书信息',
					barWidth: 20,
					seriesData: data[1],
					chartWrapperId: 'borrowType'
				};
			chart.barPoint(options2);
		//});
		
	});
})();
 
