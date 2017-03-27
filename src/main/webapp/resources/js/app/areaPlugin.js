/**
 * 行政区划下拉初始化
 */
var clearData=[];
var tcmData=[{'id':0,'text':'全部中医馆'},{'id':1,'text':'中医馆01'},{'id':2,'text':'中医馆02'},{'id':3,'text':'中医馆03'},{'id':4,'text':'中医馆04'}];
orange.searchCombobox = {
//	//combobox初始化
	//顺序：中医馆，省，市，区的id
	init: function (tcmid,provinceid,cityid,districtid) {	//	模块初始化
		this.getProvinceInit(provinceid,cityid,districtid);
		this.getCityInit(cityid,provinceid,districtid);
		this.getDistrictInit(districtid,cityid);
		this.getTcmDataInit(tcmid);
	},
	getProvinceInit : function (id,cityid,districtid){
		$("#"+id).combobox({
			data:$.appDictCache.get('dict_administrativedivision'),  
		    valueField:'code',   
		    textField:'value',
		    editable:false,
		    loadFilter : function(data){//过滤
				var newdata = [];
				$.each( data, function(i, n){//省级行政区划末位4个0
					  if(n.code.indexOf('0000') > -1){
						  newdata.push(n);
					  }
				});
				return newdata;
			},
		    onSelect:function(node){//加载市级数据，并过滤，同时清空区级数据
		    	if(node.code=='000000'){//设置全国代码为000000,选择全国的时候,市级数据不加载,清除原来的数据.否则加载选择的数据
		    		$("#"+cityid).combobox({data:clearData});
		    	}else{
		    		var newdata = [];
		    		var proparam = node.code.substr(0,2);
					$.each($.appDictCache.get('dict_administrativedivision'), function(i, n){//过滤，末两位为0，前面2位是行政省的数据
						if(n.code == node.code){
							return;
						}  
						if(n.code.substr(0,2)==proparam && n.code.substr(4,6)=='00'){
							  newdata.push(n);
						  }
					});
		    		$("#"+cityid).combobox({data:newdata});
		    	}
	    		$("#"+districtid).combobox({data:clearData});
		    },
		    onLoadSuccess : function(data){
		    	//如果行政区划有值，直接赋值，市区数据加载
		    	if($("#"+id).combobox('getValue')!=""){
		    		$("#"+cityid).combobox({data:$.appDictCache.get('dict_administrativedivision')});
		    	}
		    }
		});
	},
	getCityInit : function (id,provinceid,districtid){
		$("#"+id).combobox({
		    valueField:'code',   
		    textField:'value',
		    editable:false,
		    onSelect:function(node){
		    	var newdata = [];
				var cityparam = node.code.substr(0,4);
				$.each($.appDictCache.get('dict_administrativedivision'), function(i, n){//过滤，末位不是0，前面4位和市级数据一致
					if(n.code == node.code){
						return;
					}
					if(n.code.substr(0,4)==cityparam && n.code.substr(4,6)!='00'){
						  newdata.push(n);
					 }
				});
	    		$("#"+districtid).combobox({data:$.appDictCache.get('dict_administrativedivision')});
		    },
		    onLoadSuccess : function(data){
		    	//如果行政区划有值，直接赋值，区县级数据加载
		    	if($("#"+id).combobox('getValue')!=""){
		    		$("#"+districtid).combobox({data:$.appDictCache.get('dict_administrativedivision')});
		    	}
		    }
		});
	},
	getDistrictInit : function (id,cityid){
		$("#"+id).combobox({
//			data:$.appDictCache.get('dict_administrativedivision'),
		    valueField:'code',   
		    textField:'value',
		    editable:false
		});
	},
	getTcmDataInit : function (id){
		$('#'+id).combobox({
			data:tcmData,
		    valueField:'id',   
		    textField:'text' 
		});
	}
}