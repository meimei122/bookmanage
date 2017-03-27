/**
 * 医疗服务-处方
 */
orange.servicePrescri = {
	init: function(){
		$('#servicePrescriGrid').datagrid({ 
			url:'order/getOrder',
			rownumbers:true,
			striped:true,
			showFooter:true,
		    columns:[[   
		        {field:'area',title:'行政地区',width:'20%'}, 
		        {field:'totalPrescriptionNumber',title:'总处方数',width:'10%'}, 
		        {field:'chineseHerbalMedicine',title:'中草药处方数',width:'20%'},    
		        {field:'chinesePatentMedicine',title:'中成药处方数',width:'19%'},			
		        {field:'medicine',title:'西药处方数',width:'19%'}
		    ]],
		    onLoadSuccess: function(data){
	            /*$(this).datagrid('appendRow', {
	            	area: '<span class="subtotal">合计</span>',
	            	totalPrescriptionNumber: '<span class="subtotal">' + orange.systemPage.computeTotal('servicePrescriGrid',"totalPrescriptionNumber",0) + '</span>',
	            	chineseHerbalMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('servicePrescriGrid',"chineseHerbalMedicine",0) + '</span>',
	            	chinesePatentMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('servicePrescriGrid',"chinesePatentMedicine",0) + '</span>',
	            	medicine: '<span class="subtotal">' + orange.systemPage.computeTotal('servicePrescriGrid',"medicine",0) + '</span>'
	            });*/
		    	$('#servicePrescriGrid').datagrid('getPanel').find('.datagrid-view2 .datagrid-body').find('tr:last').css({'font-weight':600});
	        }
		});
	},
	queryBtn: function(){		//查询
		$('#servicePrescriGrid').datagrid('load',{
			
		});
	},
	exportBtn:function(){		//导出
		
	},
}
orange.searchCombobox.init('','servicePrescri_province','servicePrescri_city','servicePrescri_district');
orange.servicePrescri.init();