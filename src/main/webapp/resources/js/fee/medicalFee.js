/**
 * 医疗费用
 */
orange.tcmMuseum = {
	init: function(){
		$('#medicalFeeGrid').datagrid({ 
			url:'account/getAccount',
			rownumbers:true,
			striped:true,
			showFooter:true,
		    columns:[[    
		        {field:'area',title:'行政地区',width:'20%'}, 
		        {field:'totalPrescriptionNumber',title:'总处方费用',width:'19%'}, 
		        {field:'chineseHerbalMedicine',title:'中草药处方费用',width:'19%'},    
		        {field:'chinesePatentMedicine',title:'中成药处方费用',width:'19%'},			
		        {field:'medicine',title:'西药处方费用',width:'19%'}
		    ]],
		    onLoadSuccess: function(data){
		    	/*$(this).datagrid('appendRow', {
	            	area: '<span class="subtotal">合计</span>',
	            	totalPrescriptionNumber: '<span class="subtotal">' + orange.systemPage.computeTotal('medicalFeeGrid',"totalPrescriptionNumber",2) + '</span>',
	            	chineseHerbalMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('medicalFeeGrid',"chineseHerbalMedicine",2) + '</span>',
	            	chinesePatentMedicine: '<span class="subtotal">' + orange.systemPage.computeTotal('medicalFeeGrid',"chinesePatentMedicine",2) + '</span>',
	            	medicine: '<span class="subtotal">' + orange.systemPage.computeTotal('medicalFeeGrid',"medicine",2) + '</span>'
	            });*/
		    	$('#medicalFeeGrid').datagrid('getPanel').find('.datagrid-view2 .datagrid-body').find('tr:last').css({'font-weight':600});
	        }
		});
	},
	queryBtn: function(){		//查询
		$('#medicalFeeGrid').datagrid('load',{
			
		});
	},
	exportBtn:function(){		//导出
		
	},
}
orange.searchCombobox.init('','medicalFee_province','medicalFee_city','medicalFee_district');
orange.tcmMuseum.init();