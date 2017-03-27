/**
 * 门诊病人次均治疗费用
 */
orange.tcmMuseum = {
	init: function(){
		$('#averageClinicGrid').datagrid({ 
			url:'account/getAvgAccount',
			rownumbers:true,
			striped:true,
			showFooter:true,
		    columns:[[    
		        {field:'area',title:'行政地区',width:'20%'}, 
		        {field:'avgChineseHerbalMedicine',title:'中草药处方人次均费用',width:'20%'}, 
		        {field:'avgChinesePatentMedicine',title:'中成药处方人次均费用',width:'20%'},    
		        {field:'avgWesternMedicine',title:'西药处方人次均费用',width:'20%'}		
		    ]],
		    onLoadSuccess: function(data){
		    	/*$(this).datagrid('appendRow', {
	            	area: '<span class="subtotal">合计</span>',
	            	avgChineseHerbalMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('averageClinicGrid',"avgChineseHerbalMedicine",2) + '</span>',
	            	avgChinesePatentMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('averageClinicGrid',"avgChinesePatentMedicine",2) + '</span>',
	            	avgWesternMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('averageClinicGrid',"avgWesternMedicine",2) + '</span>'
	            });*/
		    	$('#averageClinicGrid').datagrid('getPanel').find('.datagrid-view2 .datagrid-body').find('tr:last').css({'font-weight':600});
	        }
		});
	},
	queryBtn: function(){		//查询
		$('#averageClinicGrid').datagrid('load',{
			
		});
	},
	exportBtn:function(){		//导出
		
	},
}
orange.searchCombobox.init('','averageClinic_province','averageClinic_city','averageClinic_district');
orange.tcmMuseum.init();