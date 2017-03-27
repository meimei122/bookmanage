/**
 * 横式菜单栏应用资源菜单处理
 */
var divcontent='';
$(function() {
	//var data = orange.getResourceData();
	var data = [
	            {
	                "id": "886248f6-c902-4b83-ab17-f8e8aa7c4e36", 
	                "name": "卫生资源", 
	                "url": null, 
	                "pid": null, 
	                "type": "0", 
	                "description": null, 
	                "sort": 9, 
	                "display": "1", 
	                "icon": null, 
	                "children": [
	                    {
	                        "id": "576c8e18-3e6c-49b8-836e-56788002da4d", 
	                        "name": "中医馆", 
	                        "url": "resources/tcmMuseum", 
	                        "pid": "886248f6-c902-4b83-ab17-f8e8aa7c4e36", 
	                        "type": "0", 
	                        "description": "统计", 
	                        "sort": 1, 
	                        "display": "1", 
	                        "icon": null, 
	                        "children": [ ]
	                    }, 
	                    {
	                        "id": "e1613c1f-529b-4593-b37a-8915130441f5", 
	                        "name": "卫生人力", 
	                        "url": "resources/healthManpower", 
	                        "pid": "886248f6-c902-4b83-ab17-f8e8aa7c4e36", 
	                        "type": "0", 
	                        "description": "统计", 
	                        "sort": 2, 
	                        "display": "1", 
	                        "icon": null, 
	                        "children": [ ]
	                    }
	                ]
	            }, 
	            {
	                "id": "596be577-da7c-4bed-ac17-5e11c3a48a65", 
	                "name": "医疗服务利用", 
	                "url": null, 
	                "pid": null, 
	                "type": "0", 
	                "description": null, 
	                "sort": 10, 
	                "display": "1", 
	                "icon": null, 
	                "children": [
	                    {
	                        "id": "f1797d07-f187-4ca9-97d6-321891b77bd5", 
	                        "name": "门诊", 
	                        "url": "service/clinic", 
	                        "pid": "596be577-da7c-4bed-ac17-5e11c3a48a65", 
	                        "type": "0", 
	                        "description": "统计", 
	                        "sort": 1, 
	                        "display": "1", 
	                        "icon": null, 
	                        "children": [ ]
	                    }, 
	                    {
	                        "id": "c005437c-2032-474a-a36b-d2a87503a627", 
	                        "name": "中药处方", 
	                        "url": "service/prescription", 
	                        "pid": "596be577-da7c-4bed-ac17-5e11c3a48a65", 
	                        "type": "0", 
	                        "description": "统计", 
	                        "sort": 2, 
	                        "display": "1", 
	                        "icon": null, 
	                        "children": [ ]
	                    }
	                ]
	            }, 
	            {
	                "id": "81181a2a-0a2f-431b-845a-bddb9f3f0e69", 
	                "name": "医疗费用", 
	                "url": null, 
	                "pid": null, 
	                "type": "0", 
	                "description": null, 
	                "sort": 11, 
	                "display": "1", 
	                "icon": null, 
	                "children": [
	                    {
	                        "id": "b650c620-c56b-407b-9340-c234be03ccaf", 
	                        "name": "门诊病人次均治疗费用", 
	                        "url": "fee/averageClinic", 
	                        "pid": "81181a2a-0a2f-431b-845a-bddb9f3f0e69", 
	                        "type": "0", 
	                        "description": "统计", 
	                        "sort": 1, 
	                        "display": "1", 
	                        "icon": null, 
	                        "children": [ ]
	                    }, 
	                    {
	                        "id": "4d72de90-4217-47af-bf75-7b07f0e30c6e", 
	                        "name": "医疗费用", 
	                        "url": "fee/medicalFee", 
	                        "pid": "81181a2a-0a2f-431b-845a-bddb9f3f0e69", 
	                        "type": "0", 
	                        "description": "统计", 
	                        "sort": 2, 
	                        "display": "1", 
	                        "icon": null, 
	                        "children": [ ]
	                    }
	                ]
	            }
	        ];
	var content='',panel = $("#indexMenu").panel();
	for(var i=0; i<data.length; i++) {
		var title = data[i].name;
		var href=data[i].url;
		var iconCls = data[i].icon;
		var children = data[i].children;
		if(children.length==0){
			content += '<a href="#" class="easyui-linkbutton" data-options="iconCls:\''+iconCls+' color-icon\'" onclick=_indexMainTabs.addModule(\''+title+'\',\''+href+'\')>'+title+'</a>';
		}else{
			var menu = "#menu_"+ data[i].id;
			content += '<a href="#" class="easyui-menubutton" data-options="menu:\''+menu+'\',iconCls:\''+iconCls+' color-icon\'">'+title+'</a>';
			var childcontent=renderChildrenData (children);
			content += '<div id="menu_'+data[i].id+'">'+childcontent+'</div>';
		}
		divcontent='';
	}
	$("#indexMenu").panel('clear');
	$("#indexMenu").panel('body').append('<div>'+content+'</div>');
	$.parser.parse(panel);
});

function renderChildrenData (childlist) {
	for(var i=0;i<childlist.length;i++) {
		var menucontent='';
		var url=childlist[i].url;
		var name = childlist[i].name;
		var icon = childlist[i].icon;
		var child = childlist[i].children;
		if(child.length==0){
			menucontent += '<div  data-options="iconCls:\''+icon+' color-icon\'" onclick=_indexMainTabs.addModule(\''+name+'\',\''+url+'\')>'+name+'</div>';
			divcontent += menucontent;
		}else{
			divcontent += '<div><span>'+name+'</span><div>';
			renderChildrenData(child);
			divcontent += '</div></div>';
		}
	}
	return divcontent;
}
