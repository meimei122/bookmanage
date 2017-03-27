/**
 * 门诊
 */
orange.serviceClinic = {
	init: function(){
		$('#serviceClinicGrid').datagrid({ 
			url:'record/getRecord',
			rownumbers:true,
			striped:true,
			showFooter:true,
		    columns:[[    
		        {field:'area',title:'行政地区',width:'30%'},
		        {field:'totalDiagnosisNumber',title:'总诊疗人次（电子病历总数）',width:'30%'}, 
		        {field:'avgDiagnosisNumber',title:'医师日均担负诊疗人次',width:'30%'}
		    ]],
		    onLoadSuccess: function(data){
	            /*$(this).datagrid('appendRow', {
	            	area: '<span class="subtotal">合计</span>',
	            	totalDiagnosisNumber: '<span class="subtotal">' + orange.systemPage.computeTotal('serviceClinicGrid',"totalDiagnosisNumber",0) + '</span>',
	            	avgDiagnosisNumber: '<span class="subtotal">' + orange.systemPage.computeTotal('serviceClinicGrid',"avgDiagnosisNumber",2) + '</span>'
	            });*/
		    	$('#serviceClinicGrid').datagrid('getPanel').find('.datagrid-view2 .datagrid-body').find('tr:last').css({'font-weight':600});
	        }
		});
	},
	queryBtn: function(){		//查询
		$('#serviceClinicGrid').datagrid('load',{
			
		});
	},
	exportBtn:function(){		//导出
		
	}
}
orange.searchCombobox.init('','serviceClinic_province','serviceClinic_city','serviceClinic_district');
orange.serviceClinic.init();