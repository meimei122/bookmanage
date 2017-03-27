/**
 * 中医馆
 */
orange.tcmMuseum = {
	init: function(){
		$('#tcmMuseumGrid').datagrid({ 
			url:'organization/getTcmInformation',
			rownumbers:true,
			striped:true,
			showFooter:true,
		    columns:[[   
		        {field:'cityName',title:'行政地区',width:'15%'}, 
		        {field:'tcmNum',title:'中医馆数量',width:'10%'}, 
		        {field:'tcmName',title:'中医馆名称',width:'20%'},    
		        {field:'orgLevel',title:'机构等级',width:'19%'},			
		        {field:'category',title:'机构类别',width:'19%'}
		    ]],
		    onLoadSuccess: function(data){
	            $(this).datagrid("autoMergeCells",['cityName','tcmNum']);
	            $(this).datagrid('appendRow', {
	            	cityName: '<span class="subtotal">合计</span>',
	                tcmNum: '<span class="subtotal">' + orange.systemPage.computeTotal2('tcmMuseumGrid',"tcmName") + '</span>'
	            });
	        }
		});
	},
	queryBtn: function(){		//查询
		$('#tcmMuseumGrid').datagrid('load',{
			
		});
	},
	exportBtn:function(){		//导出
		
	},
}
orange.searchCombobox.init('','tcmMuseum_province','tcmMuseum_city','tcmMuseum_district');
orange.tcmMuseum.init();