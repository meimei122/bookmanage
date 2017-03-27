/**
 * 卫生人力
 */
orange.tcmMuseum = {
	init: function(){
		$('#healthManPowGrid').datagrid({ 
			url:'user/getDoctorUser',
			rownumbers:true,
			striped:true,
			showFooter:true,
		    columns:[[    
		        {field:'area',title:'行政地区',width:'15%'}, 
		        {field:'doctorTotalNumber',title:'医生数量',width:'8%'}, 
		        {field:'avgAge',title:'平均年龄',width:'8%'},    
		        {field:'man',title:'男',width:'8%'},			
		        {field:'woman',title:'女',width:'8%'},
		        {field:'archiaterNumber',title:'主任医师',width:'8%'},
		        {field:'deputyArchiaterNumber',title:'副主任医师',width:'8%'},
		        {field:'visitingStaffNumber',title:'主治医师',width:'8%'},
		        {field:'physicianNumber',title:'医师',width:'8%'},
		        {field:'feldsherNumber',title:'医士',width:'8%'}
		    ]],
		    onLoadSuccess: function(data){
		    	$('#healthManPowGrid').datagrid('getPanel').find('.datagrid-view2 .datagrid-body').find('tr:last').css({'font-weight':600})
//		    	$(this).datagrid('appendRow', {
//	            	area: '<span class="subtotal">合计</span>',
//	            	doctorTotalNumber: '<span class="subtotal">' + orange.systemPage.computeTotal('healthManPowGrid',"doctorTotalNumber",0) + '</span>',
//	            });
	        }
		});
	},
	queryBtn: function(){		//查询
		$('#healthManPowGrid').datagrid('load',{
			
		});
	},
	exportBtn:function(){		//导出
		
	},
}
orange.searchCombobox.init('','healthManPow_province','healthManPow_city','healthManPow_district');
orange.tcmMuseum.init();