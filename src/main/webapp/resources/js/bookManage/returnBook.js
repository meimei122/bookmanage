(function(){
	require(['orange','jquery','easyUI'],function(orange,jquery,easyUI){
		$('#returnBookGrid').datagrid({
			title:'DataGrid - DetailView',
			url:'datagrid_data.json',
			width:1200,
			height:600,
			striped:true,
			singleSelect:true,
			fitColumns:true,
			rownumbers:true,
			pagination:true,
			columns:[[
				{field:'itemid',title:'Item ID',width:80},
				{field:'productid',title:'Product ID',width:100,sortable:true},
				{field:'listprice',title:'List Price',width:80,align:'right',sortable:true},
				{field:'unitcost',title:'Unit Cost',width:80,align:'right',sortable:true},
				{field:'attr1',title:'Attribute',width:150,sortable:true},
				{field:'status',title:'Status',width:60,align:'center'}
			]]
		});
	})
})();