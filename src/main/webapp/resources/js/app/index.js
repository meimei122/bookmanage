/**
 * 应用主页处理器
 * 依赖 [app.js]
 */
$(function() {
	orange.start();	//	启动应用
	$('#appName').append('<span>'+ orange.getAppName() +'</span>');	//	设置系统名称
	orange.mainPage.loadResources();	//	加载资源菜单
	orange.mainPage.bindMainTabsButtonEvent();	//	 绑定标签栏按钮事件
	orange.mainPage.bindToolbarButtonEvent();	//	绑定工具栏按钮事件
	orange.mainPage.loadTcmPage();		//加载中医馆界面
});

var mainLayout = "#indexMainLayout", mainTabs = "#indexMainTabs", mainTabsToggleAll = "#indexMainTabsToggleAll", mainTabsToggleAllIcon = "#indexMainTabsToggleAllIcon",
	menuExit = "#menuAppExit", menuFullSreen = "#indexFullScreen",modifyPassword="#modifyPassword",menuAppBack='#menuAppBack';
orange.mainPage = {	//	系统应用主页
	isCollapse: false,
	areaData:null,
	bindMainTabsButtonEvent: function() {	//	绑定标签栏按钮事件
		$(mainTabsToggleAll).click(function () { orange.mainPage.togglePanels(); });
	},
	bindToolbarButtonEvent: function() {	//	绑定工具栏按钮事件
		$(menuExit).click(function() {	//	退出登录
			orange.mainPage.logout();
		});
		$(modifyPassword).click(function() {	//	修改密码
			orange.mainPage.modifyPassword();
		});
		$(menuAppBack).click(function() {	//	返回门户
			orange.mainPage.menuAppBack();
		});
		$(menuFullSreen).click(function () {	//	全屏支持
			if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){	//	IE
				var wsh = new ActiveXObject('WScript.Shell');  
				wsh.sendKeys('{F11}'); 
			}
            if ($.util.supportsFullScreen) {
                if ($.util.isFullScreen()) {
                    $.util.cancelFullScreen();
                } else {
                    $.util.requestFullScreen();
                }
            } else {
            	$.messager.show({
            		title:'系统消息',
            		msg:'当前浏览器不支持全屏 ，请更换至最新浏览器或通过 F11 快捷键进行操作。'
            	});
            }
        });
	},
	modifyPassword:function() {		//	修改密码
		$('#modifyPasswordForm').form('clear');
		$('#oldpassword-css').css({'display':'none'});
		$('#modifyPassword_aid').val(orange.getAppDefaultAid);
		$('#modifyPassword_username').val(orange.getAppLoginName);
		$('#org_modifyPasswordWin').window('open');
	},
	loadTcmPage: function(){
		loadPage({id:'indexHomePanel', url: 'system/getPage.service?path=resources/tcmMuseum', selector: 'tcmMuseum', callback: function() {	
			$.parser.parse('#indexHomePanel');
		}});
	},
	loadResources: function() {	//	加载资源菜单
		loadPage({id:'', url: 'system/getPage.service?path=app/indexmenu', selector: 'indexMenu', callback: function() {	
			$("#indexMaskContainer").remove();
		}});
	},
	logout: function() {	//	退出登录
		$.messager.confirm("操作提醒", "您确定要退出当前应用？", function (c) {
            if (c) {
            	//sessionStorage.clear();	//	清空浏览器会话缓存
            	orange.stop();	//	停止应用并跳转到登录页面
            }
        });
	},
	menuAppBack: function() {	//	返回门户
		window.location.replace('http://10.10.200.132:8087/tcm-portal');
	},
	hideNorth: function() {	//	隐藏北部面板
		$(mainLayout).layout('collapse', 'north');
	},
	hideWest: function() {	//	隐藏西部面板
//		$(mainLayout).layout('collapse', 'west');
	},
	hideCenter: function() {	//	隐藏中间面板
		$(mainLayout).layout('collapse', 'center');
	},
	hideSouth: function() {	//	隐藏南部面板
		$(mainLayout).layout('collapse', 'south');
	},
	showNorth: function() {	//	展开北部面板
		$(mainLayout).layout('expand', 'north');
	},
	showWest: function() {	//	展开西部面板
//		$(mainLayout).layout('expand', 'west');
	},
	showCenter: function() {	//	展开中间面板
		$(mainLayout).layout('expand', 'center');
	},
	showSouth: function() {	//	展开南部面板
		$(mainLayout).layout('expand', 'south');
	},
	savePassword:function() {	//	保存修改的密码
		var jsonData = orange.systemPage.getFormData('modifyPasswordForm');
		$.ajax({
			url:'pms/checkUserPasswordService',
			type:'post',
			data:{
				username:$('#modifyPassword_username').val(),
				aid:$('#modifyPassword_aid').val(),
				password:$('#modifyPassword_password').val()
			},
			success:function(data) {
				if(data.success==false){
					$('#oldpassword-css').css({'display':'inline-block'});
				}else{
					$.ajax({
						url: 'pms/updateUserPasswordService', 
						type: 'post',
					    data: jsonData,
					    success: function() {
					    	$.messager.show({
					    		title:'提示',
					    		msg:'修改成功'
					    	})
					    	$('#org_modifyPasswordWin').window('close');
					    }
					});
				}
			}
		});
	},
	togglePanels: function() {	//	折叠或者展开所有面板
		if(!this.isCollapse) {
			$(mainTabsToggleAllIcon).removeClass('fa-expand');
			$(mainTabsToggleAllIcon).addClass('fa-compress');
			this.hideNorth();
			this.hideWest();
			this.hideSouth();
			this.isCollapse = true;
		} else {
			$(mainTabsToggleAllIcon).removeClass('fa-compress');
			$(mainTabsToggleAllIcon).addClass('fa-expand');
			this.showNorth();
			this.showWest();
			this.showSouth();
			this.isCollapse = false;
		}
	}
};
var _indexMainTabs = orange.mainPage.mainTabs = {	//	初始化标签栏
	addModule: function(title, href, iconCls, iniframe, closable, refreshable, selected) {	//	标签栏增加一个模块
		var opts = orange.mainPage.mainTabs.parseCreateTabArgs(arguments);
		var isExists = orange.mainPage.mainTabs.isExists(opts.title, opts.href);
        switch (isExists) {
            case 0: orange.mainPage.mainTabs.createTab(opts); break;
            case 1: orange.mainPage.mainTabs.jumpTab(opts); break;
            default: break;
        }
	},
	createTab: function(title, href, iconCls, iniframe, closable, refreshable, selected, pre) {	//	创建一个标签页
		var t = $(mainTabs), i = 0, opts = orange.mainPage.mainTabs.parseCreateTabArgs(arguments);
        while (t.tabs("getTab", opts.title + (i ? String(i) : ""))) { i++; }
        t.tabs("add", {title:opts.title, url:opts.href, iconCls:opts.iconCls, iniframe:opts.iniframe, closable:opts.closable, refreshable:opts.refreshable, selected:opts.selected});
        loadPage({url: 'system/getPage.service?path='+opts.href, selector: orange.getAppAjaxLoadFlag(), callback: function(pageContent) {	//	加载页面
            if(pageContent != undefined && pageContent != "") {
            	t.tabs('getTab', opts.title).append(pageContent);
                $.parser.parse(t.tabs('getTab', opts.title));
            }
        }, asyncCallback: function() {	//	异步加载脚本文件回调函数处理
        	_indexMainTabs.preHandler(pre);
        }});
	},
	isExists: function(title, href) {	//	判断指定的选项卡是否存在于当前主页面的选项卡组中
        var t = $(mainTabs), tab = t.tabs('getTab',title),ret=1;
		if(tab==null){
			ret = 0;
		}
        return ret;
	},
	jumpTab: function(which, preHandler) {	//	标签页跳转
		$(mainTabs).tabs("select", which.title);
		this.preHandler(preHandler);
	},
	//关闭之前打开的中医馆的页面，并新建一个tab页,因为没有看明白isExists方法是如何判断的，未放入case中,单独在此处列出
	closeTab: function(which, preHandler) {	//	标签页跳转
		$(mainTabs).tabs("close", which);
		//未知具体作用，因执行后，对象找不到所以暂时注释，先不处理
//		this.preHandler(preHandler);
	},
	parseCreateTabArgs: function(args) {	//	解析方法参数
		var ret = {};
        if (!args || !args.length) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption);	//	得到合并的结果却又不想修改ret的结构
        } else if (args.length == 1) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, typeof args[0] == "object" ? args[0] : { title: args[0] });
        } else if (args.length == 2) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, { title: args[0], href: args[1]});
        } else if (args.length == 3) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, { title: args[0], href: args[1], iconCls: args[2] });
        } else if (args.length == 4) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, { title: args[0], href: args[1], iconCls: args[2], iniframe: args[3] });
        } else if (args.length == 5) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, { title: args[0], href: args[1], iconCls: args[2], iniframe: args[3], closable: args[4] });
        } else if (args.length == 6) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, { title: args[0], href: args[1], iconCls: args[2], iniframe: args[3], closable: args[4], refreshable: args[5] });
        } else if (args.length >= 7) {
            $.extend(ret, orange.mainPage.mainTabs.tabDefaultOption, { title: args[0], href: args[1], iconCls: args[2], iniframe: args[3], closable: args[4], refreshable: args[5], selected: args[6] });
        }
        return ret;
	},                                                                                    
	preHandler: function(preHandler) {	//	脚本预处理
		if(typeof preHandler == 'object' && preHandler.name) {
			var fn = eval(preHandler.name);
			if(typeof fn === 'function') {
				fn.call(this, preHandler.params);
			}
		}
	},
	tabDefaultOption: {	//	选项卡默认配置
		title: "新建选项卡", href: "", iniframe: true, closable: true, refreshable: true, repeatable: true, selected: true
	}
};

orange.systemPage = {	//	系统页面级方法对象
	getFormData: function(id) {
		var json = {}, form = $('#'+id).serializeArray();
		for(var i=0;i<form.length;i++) {
			if(!json[form[i].name]){
				json[form[i].name]=form[i].value;
			}
		}
		return json;
	},
	selfLoadFilter:function(data) {	//	对载入数据进行过滤，取服务器获取数据data的data属性
		if(data){
			return data=data.data?{ //本地过滤时；已无data属性；直接取data即可
	    		total: data.total,
	    		rows: data.data
	    	}:{
	    		total: data.total,
	    		rows: data.rows
	    	};
		}else{
			return data = { total: 0, rows: null };
		}
    },
    computeTotal: function(id, colName,num) {
        var rows = $('#'+id).datagrid('getRows');
        var total = 0;
        for (var i = 0; i < rows.length; i++) {
            total += parseFloat(parseFloat(rows[i][colName]).toFixed(num));
        }
        return total;
    },
    computeTotal2: function(id, colName) {
        var rows = $('#'+id).datagrid('getRows');
        var total = 0;
        for (var i = 0; i < rows.length; i++) {
            total += 1;
        }
        return total;
    }
};

//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { 
var o = {
   "M+": this.getMonth() + 1, //月份 
   "d+": this.getDate(), //日 
   "h+": this.getHours(), //小时 
   "m+": this.getMinutes(), //分 
   "s+": this.getSeconds(), //秒 
   "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
   "S": this.getMilliseconds() //毫秒 
};
if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
for (var k in o)
if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
return fmt;
}
$.extend($.fn.datagrid.methods, {
    autoMergeCells : function (jq, fields) {
        return jq.each(function () {
            var target = $(this);
            if (!fields) {
                fields = target.datagrid("getColumnFields");
            }
            var rows = target.datagrid("getRows");
            var i = 0,
            j = 0,
            temp = {};
            for (i; i < rows.length; i++) {
                var row = rows[i];
                j = 0;
                for (j; j < fields.length; j++) {
                    var field = fields[j];
                    var tf = temp[field];
                    if (!tf) {
                        tf = temp[field] = {};
                        tf[row[field]] = [i];
                    } else {
                        var tfv = tf[row[field]];
                        if (tfv) {
                            tfv.push(i);
                        } else {
                            tfv = tf[row[field]] = [i];
                        }
                    }
                }
            }
            $.each(temp, function (field, colunm) {
                $.each(colunm, function () {
                    var group = this;
                    
                    if (group.length > 1) {
                        var before,
                        after,
                        megerIndex = group[0];
                        for (var i = 0; i < group.length; i++) {
                            before = group[i];
                            after = group[i + 1];
                            if (after && (after - before) == 1) {
                                continue;
                            }
                            var rowspan = before - megerIndex + 1;
                            if (rowspan > 1) {
                                target.datagrid('mergeCells', {
                                    index : megerIndex,
                                    field : field,
                                    rowspan : rowspan
                                });
                            }
                            if (after && (after - before) != 1) {
                                megerIndex = after;
                            }
                        }
                    }
                });
            });
        });
    }
});
