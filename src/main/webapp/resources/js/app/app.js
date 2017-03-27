/**
 * 应用启动器 
 * 依赖[jquery]，命名空间缺省使用orange 
 * 启动器API说明：
 * clearPageContext: 清空页面上下文；
 * copyData: 复制数据；
 * getApplicationData: 获取应用数据；
 * getAppAjaxLoadFlag: 获取应用异步加载内容标识；
 * getAppContext: 获取应用上下文, 包含applicationData，groupData，identityData，organizationData，parameterData，
 * resourceData，roleData以及userData；
 * getAppDefaultAid: 获取应用默认编号； 
 * getAppLoginName: 获取应用登录名； 
 * getAppName: 获取应用名称；
 * getDictData: 获取字典数据；
 * getGroupData: 获取群组数据； 
 * getIdentityData: 获取人员身份信息；
 * getOrganizationData: 获取机构数据； 
 * getPageContext: 获取指定页面的上下文； 
 * getParameterData: 获取应用参数数据； 
 * getResourceData: 获取资源数据； 
 * getRoleData: 获取角色数据； 
 * getUserData: 获取用户数据；
 * pageContext: 页面上下文； 
 * removePageContext: 移除指定页面的上下文；
 * setPageContext: 设置指定页面的上下文； 
 * start: 应用启动； 
 * stop: 应用停止。
 */
if(orange) {
	throw new Error('命名空间orange被使用，应用启动失败');
} else {
	var orange = {};
	orange = (function(){
		var appContext = {	//	应用上下文
				JSESSIONID: '',	//	应用会话唯一识别码
				applicationData: {},
				groupData:{},
				identityData:{},
				organizationData: {},
				parameterData: {},
				resourceData: {},
				TCMDetailResourceData: {},
				roleData: [],
				userData: {}
			},
			appConfigs = {	//	应用全局配置
				indexUrl:'resources/js/app/index.js',
				appAjaxLoadFlag: '',	//	异步加载页面内容的标识
				appChosedRoleId: '',	//	当前选择的角色编号
				appDefaultAid: 'tcmcp',	//	系统默认应用编号
				appLoginName: '',	//	用户登录名
				appLoginNameUrl:'pms/getUsernameService',	//	获取登录名服务的调用地址
				appLoginUrl: 'login',	//	登录请求路径
				appLogoutUrl: 'logout',	//	退出登录跳转路径
				appName: '中医临床业务监管',	//	应用名称
				appNameSpace: 'orange',	//	应用命名空间
				appUserDataUrl: 'pms/getAppUserDataService',	//	获取用户信息服务的调用地址
				appResourceDataUrl: 'pms/getAppPermissionDataService',	//	获取资源信息服务的调用地址
				appResourceDataUrlHorizontalMenu:'pms/getAppPermissionDataServiceHorizontalMenu',//tcmdetail中医馆的信息获取资源服务信息调用地址父子关系展示横向菜单
				appIdentityDataUrl:'pms/getAppIdentityDataService',	//	获取人员身份信息服务的调用地址
				appParameterDataUrl:'pms/getAppParameterService',	//	获取系统参数服务的调用地址
				appDictDataUrl:'pms/getAppDictDataService'	//	获取应用字典数据服务的调用地址
			},
			pageContext = {};	//	页面上下文
		
		function start() {	//	启动应用--绑定应用数据，加载应用缓存
			$.appDictCache = {};
			$.extend($.appDictCache, {
				map: {},
				push: function(key, value) {
					if(this.contain(key)) {
						throw new Error('键值已存在！');
					}else {
						$.appCache.map[key] = value;
					}
				},
				get: function(key) {
					return $.appCache.map[key];
				},
				remove: function(key) {
					delete($.appCache.map[key]);
				},
				clear: function() {
					$.appCache.map = {};
				},
				replace: function(key, value) {
					if(!this.contain(key)) {
						throw new Error('键值不存在！');
					}
				    $.appCache.map[key] = value;
				},
				contain: function(key) {
					return $.appCache.map[key] !== undefined;
				}
			});
			if(!localStorage || !sessionStorage) {
				alert('请选择支持HTML5的浏览器');
				return;
			}
			//首页加载中医馆地址信息需要行政区划的字典表，需要先渲染$.appCache，所以方法执行先后顺序调整
			loadAppCache();
			bindAreaData();
			//bindAppData();
		}
		
		function stop() {  // 停止应用--退出登录
			$.post(appConfigs.appLogoutUrl, function(data) {
            	if(data == 'success') {
            		location.href = location.href = "https://localhost:18443/cas/logout";//appConfigs.appLoginUrl;
            	}
            });
		}
		
		function bindJSESSIONID(id) {	//	绑定会话ID
			appContext.JSESSIONID = id;
		}
		
		function bindApplicationData(data) {	//	绑定应用信息
			appContext.applicationData = data;
		}
		
		function bindDictData(data) {	//	绑定字典信息
			if(data) {
				var strData = JSON.stringify(data); 
				localStorage.dictData = strData;
				if(null != data){
					for(var i=0;i<data.length;i++){
						$.appDictCache.push(data[i].id,data[i].items);
					}
				}
			}
		}
		
		function bindAreaData(){
			$.ajax({
				url:'dictDivisionCode/getOrder',
				type:'post',
				async:false,
				success:function(data){
					if(data){
						$.appDictCache.push('dict_administrativedivision',data.data);
					}
				}
			});
		}
		
		function bindGroupData(data) {	//	绑定群组信息
			appContext.groupData = data;
		}
		
		function bindIdentityData(data) {	//	绑定人员身份信息
			appContext.identityData = data;
		}
		
		function bindOrganizationData(data) {	//	绑定机构信息
			appContext.organizationData = data;
		}
		
		function bindParameterData(data) {	//	绑定应用信息
			appContext.parameterData = data;
		}
		
		function bindResourceData(data) {	//	绑定资源信息
			appContext.resourceData = data;
		}
		function bindTCMDetailResourceData(data){ //绑定中医馆详情资源信息
			appContext.TCMDetailResourceData = data;
		}
		function bindRoleData(data) {	//	绑定角色信息
			appContext.roleData = data;
		}
		
		function bindUserData(data) {	//	绑定用户信息
			appContext.userData = data;
			appConfigs.appLoginName = data.username;	//	绑定用户登录名
			var roles = data.roles;
			if(roles) {	//	赋予角色
				for(var i=0; i<roles.length; i++) {
					appContext.roleData.push(roles[i]);
				}
			}
		}
		
		function copyData(data) {  // 对象复制
			var dataCopy;
			if(typeof data == "object") {
				if(data instanceof Array) {
					dataCopy = [];
					for(var i=0;i<data.length;i++){
						dataCopy.push(data[i]);
					}
				}else{
					dataCopy = data;
				}
				return dataCopy;
			}
		}
		
		function getJSESSIONID() {	//	获取会话ID
			return appContext.JSESSIONID;
		}
		
		function getAppContext() {	//	获取应用上下文
			return appContext;
		}

		function getApplicationData() {	//	获取应用数据
			return appContext.applicationData;
		}
		
		function getAppAjaxLoadFlag() {	//	获取应用异步加载内容标识
			return appConfigs.appAjaxLoadFlag;
		}
		
		function getAppDefaultAid() {	//	获取应用默认编号
			return appConfigs.appDefaultAid;
		}
		
		function getAppLoginName() {	//	获取应用登录名
			return appConfigs.appLoginName;
		}
		
		function getAppName() {	//	获取应用名称
			return appConfigs.appName;
		}
		
		function getDictData() {	//	获取字典信息
			var strData = localStorage.dictData;
			var objData = JSON.parse(strData);
			if(null != objData){
				for(var i=0;i<objData.length;i++){
					$.appDictCache.push(objData[i].id,objData[i].items);
				}
			}
			return JSON.parse(strData);	
		}
		
		function getGroupData() {	//	获取群组数据
			return appContext.groupsData;
		}
		
		function getIdentityData() {	//	获取人员身份数据
			return appContext.identityData;
		}
		
		function getOrganizationData() {	//	获取机构数据
			return appContext.organizationData;
		}
		
		function getParameterData() {	//	获取参数数据
			return appContext.parameterData;
		}
		
		function getResourceData() {	//	获取资源数据
			return appContext.resourceData;
		}
		
		function getTCMDetailResourceData() {//获取中医馆详情资源
			return appContext.TCMDetailResourceData;
		}
		
		function getRoleData() {	//	获取角色数据
			return appContext.roleData;
		}
		
		function getUserData() {	//	获取用户数据
			return appContext.userData;
		}
		
		function clearPageContext() {	//	清空页面上下文
			pageContext = {};
		}
		
		function getPageContext(page) {	//	获取页面上下文
			return pageContext[page];
		}
		
		function removePageContext(page) {	//	移除指定页面的上下文
			if(pageContext.page) {
				pageContext[page] = undefined;
			}
		}
		
		function setPageContext(page, params) { //	设置页面上下文。page:页面标识; params:传递参数
			pageContext[page] = params;
		}
		
		function bindAppData() {  //	绑定资源数据
			var iid='', roleIds=[];
			$.when(
				$.ajax({
					url: appConfigs.appLoginNameUrl,
					type: 'post',
					async: false,
					success: function(data) {
						appConfigs.appLoginName = data;	//	获取登录用户名
					}
				})
			).then(
				$.ajax({   //获取应用上下文的用户信息
					url: appConfigs.appUserDataUrl,
					type: 'post',
					async: false,
					data: {
						username:appConfigs.appLoginName,
						aid:appConfigs.appDefaultAid
					},
					success: function(data) {
						if(data.data) {
							bindUserData(data.data.userData);	//	绑定用户数据
							bindApplicationData(data.data.applicationData);		//	绑定应用数据
							bindRoleData(data.data.roleUserRefList);	//	绑定角色信息数据
							iid = data.data.userData.iid;
							var rolesData = data.data.roleUserRefList;
							for(var i=0;i<rolesData.length;i++){
								roleIds.push(rolesData[i].rid);
							}
						}
					}
				})
			).then(
				$.ajax({   //获取应用上下文的资源权限
					url: appConfigs.appResourceDataUrl,
					type: 'post',
					async: false,
					data: {aid:appConfigs.appDefaultAid,roleids:roleIds},
					success: function(data) {
						if(data.data) {
							bindResourceData(data.data);	//	绑定资源数据
						}
					}
				})
			);
			!iid?'':
				$.ajax({
					url:appConfigs.appIdentityDataUrl,
					type: 'post',
					async: false,
					data:{iid : iid},
					success:function(data){
						//	获取应用上下文的身份信息
						if(data.data) {
							bindIdentityData(data.data.identityInfomationData);	//	绑定人员信息数据
							bindOrganizationData(data.data.organizationData);	//	绑定机构信息
//							bindGroupsData(data.data.groupDataList);	//	绑定群组信息
						}
					}
				});
			$.ajax({
				url:appConfigs.appDictDataUrl,
				type: 'post',
				async: false,
				data:{aid:appConfigs.appDefaultAid,type:'1'},
				success:function(data){
					if(data.data) {
						bindDictData(data.data);
					}
				}
			});
			$.post(appConfigs.appParameterDataUrl,{aid:appConfigs.appDefaultAid},function(data){
				if(data.data) {
					bindParameterData(data.data);	//	绑定参数数据
				}
			});
//			$.post(appConfigs.appDictDataUrl,{aid:appConfigs.appDefaultAid,type:'1'},function(data){
//				if(data.data) {
//					bindDictData(data.data);	//	绑定字典数据
//				}
//			});
			
//			$.post(appConfigs.appResourceDataUrlHorizontalMenu,{aid:appConfigs.appDefaultAid,roleids:['7febfd10-0eea-41d6-9e8f-cd9588b22e9f']},function(data){
//				if(data.data) {
//					bindTCMDetailResourceData(data.data);	//	绑定中医馆详情资源
//				}
//			});
			$.post(appConfigs.appResourceDataUrlHorizontalMenu,{aid:appConfigs.appDefaultAid,roleids:['5e5ef8f3-95e6-4836-87b9-502f9b6ea78e']},function(data){
				if(data.data) {
					bindTCMDetailResourceData(data.data);	//	绑定中医馆详情资源
				}
			});
		}
		
		function loadAppCache() {	//	加载应用缓存组件
			$.appCache = {};
			$.extend($.appCache, {
				map: {},
				push: function(key, value) {
					if(this.contain(key)) {
						throw new Error('键值已存在！');
					}else {
						$.appCache.map[key] = value;
					}
				},
				get: function(key) {
					return $.appCache.map[key];
				},
				remove: function(key) {
					delete($.appCache.map[key]);
				},
				clear: function() {
					$.appCache.map = {};
				},
				replace: function(key, value) {
					if(!this.contain(key)) {
						throw new Error('键值不存在！');
					}
				    $.appCache.map[key] = value;
				},
				contain: function(key) {
					return $.appCache.map[key] !== undefined;
				}
			});
		}
		
		return {
			clearPageContext: clearPageContext,
			copyData: copyData,
			bindJSESSIONID: bindJSESSIONID,
			getJSESSIONID: getJSESSIONID,
			getApplicationData: getApplicationData,
			getAppAjaxLoadFlag: getAppAjaxLoadFlag,
			getAppContext: getAppContext,
			getAppDefaultAid: getAppDefaultAid,
			getAppLoginName: getAppLoginName,
			getAppName: getAppName,
			getDictData: getDictData,
			getGroupData: getGroupData,
			getIdentityData: getIdentityData,
			getOrganizationData: getOrganizationData,
			getPageContext: getPageContext,
			getParameterData: getParameterData,
			getResourceData: getResourceData,
			getTCMDetailResourceData: getTCMDetailResourceData,
			getRoleData: getRoleData,
			getUserData: getUserData,
			pageContext: pageContext,
			removePageContext: removePageContext,
			setPageContext: setPageContext,
			start: start,
			stop: stop
		};
	})();
}

/**
 * 全局ajax完成事件处理器
 */
$(document).ajaxComplete(function(event, xhr, settings) {
	if(xhr.getResponseHeader && xhr.getResponseHeader('sessionstatus') == 'timeout') {	//	会话过期处理
		$.messager.confirm('操作提醒', '当前用户会话已过期，请重新登录', function (c) {
            if (c) {
                window.onbeforeunload = null;
                location.href = appConfigs.appLoginUrl;
            }
		});
	}
	if(xhr.responseJSON) { //用于异步操作判断
		var jsonData = xhr.responseJSON;
		if(jsonData.success==false) {
			var message = jsonData.errorMsg==null?'操作错误':jsonData.errorMsg;
			//$.messager.alert('消息',message);
		}
	}
});

/**
 * 全局ajax发送事件处理器
 */
$(document).ajaxSend(function(event, xhr, settings) {
	if(settings.url && settings.url.indexOf('?') != -1) {
		settings.url = settings.url.replace('?', '?' + Math.random() + '&');
	} else {
		settings.url += '?' + Math.random(); 
	}
});

/**
 * 加载css文件
 * @param href
 */
function loadCss(href) {
	$("<link>").attr({ rel: "stylesheet",
        type: "text/css",
        href: href
    }).appendTo("head");
}

/**
 * 加载js文件
 * @param url
 */
function loadScript(url, async, success) {
	$.ajax({
		url: url,
		dataType: "script",
		async: async==false?false:true,
		success: success
	});
}

function getLocalDictData(dictNames){
	
}


/**
 * 根据指定路径加载页面到指定元素
 * @param id	页面加载的父元素
 * @param url	页面请求路径
 * @param selector 在被加载的页面中选择加载的元素
 * @param callback 回调函数
 * @param asyncCallback	异步加载js回调函数
 * @param async默认为true即异步请求
 * 如果id存在则将返回页面内容加载到指定元素，否则返回页面内容
 */
function loadPage(opts) {
	var pageContent = '';
	if(!opts || opts.url == null || opts.url == "" || opts.url == undefined) {
		if(typeof opts.callback == 'function') {
			opts.callback.call(opts.callback, pageContent, 'failed');
		}
		return;
	}
	if(opts.id && $('#' + opts.id)) {
		$('#' + opts.id).empty();
	}
	$.get(opts.url, function(data, success) {
		data = $.parseHTML($.trim(data), true);
		var pageScriptUrlArray = [];	//	当前页面加载的JS文件URL地址数组
		for(var i=0; i<data.length; i++) {
			if(data[i].nodeName == "LINK") {
				loadCss(data[i].href);
			}else if(data[i].nodeName == "SCRIPT") {
				if(opts.async == false) {	//	同步加载js文件
					loadScript(data[i].src, false);
				} else {	//	异步加载js文件会默认在文档加载完毕以后
					pageScriptUrlArray.push(data[i].src);
				}
			}else if(data[i].className == opts.selector || data[i].id == opts.selector) {
				if(opts.id && $('#' + opts.id)) {
					$('#' + opts.id).append(data[i]);
				} else {
					pageContent += data[i].innerHTML;
				}
			}
		}
		if(typeof opts.callback == 'function') {
			opts.callback.call(opts.callback, pageContent, 'success');
		}
		if(opts.async != false) {	//	异步加载script则执行顺序为最后
			for(var i=0; i<pageScriptUrlArray.length; i++) {
				var loadedAll = false;
				if((i+1) == pageScriptUrlArray.length) {
					loadedAll = true;
				}
				loadScript(pageScriptUrlArray[i], true, function() {
					if(loadedAll == true && typeof opts.asyncCallback == 'function') {
						opts.asyncCallback.call(opts.asyncCallback);
					}
				});
			}
		}
	});
}

