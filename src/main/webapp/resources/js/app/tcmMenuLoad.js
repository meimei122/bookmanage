//定义全局变量
//中医馆子页面的详细信息加载，id和name定义成全局变量，有赋值的话直接跳转
var tcm_guid="";
var tcm_orgName="";
//中医馆子页面菜单加载情况
//加载中医馆详细页面，页面重载，菜单重新加载
function tcmReloadOrCreate(guid,orgName){
	var isExists ;//本次取到的id，name,全局变量（上次加载的数据）id和name;
	//第一次加载该页面是未定义,关闭左侧面板，调用switch isExist的方法，加判断
	if(tcm_guid=="" && tcm_orgName==""){
		//隐藏左侧菜单并创建新的tab页
		//orange.mainPage.hideWest();
		isExists=checkIsExists(guid,orgName);//新建tab页
		reloadTrueOrFalse(isExists,guid,orgName);
		tcm_guid=guid;//给全局变量赋值
		tcm_orgName=orgName;//判断是否存在
	}else{
		//第二次加载此页面，tcm_guid和tcm_orgName已经有值，判断是否和第一次打开的一致，如果一致，跳转
		isExists=checkIsExists(guid,orgName);
		if(tcm_guid==guid && tcm_orgName== orgName){
			//未知什么情况下是0，什么情况下是1， 断点发现存在的时候判断显示1，会新建tab页，实际应该是跳转，所以赋值为2，isExist是什么情况是0什么情况是1需要此处待细究
			if(isExists==1){//重新赋值，直接跳转
				isExists=2;
				reloadTrueOrFalse(isExists,guid,orgName);
			}if(isExists==0){
				//之前打开一个中医馆01，然后关闭，再次打开中医馆01，此时本次id和全局变量中的id一致，但tab页不存在，所以需要新建tab
				reloadTrueOrFalse(isExists,guid,orgName);
				tcm_guid=guid;//给全局变量赋值
				tcm_orgName=orgName;//判断是否存在
			}
		}else{
			//上次已经打开之前的某个中医馆，所以先关闭历史的tab页，再新建
			orange.mainPage.mainTabs.closeTab(tcm_orgName,{name: 'medical/tcmDetailMenu/'+tcm_guid+'/'+encodeURI(encodeURI(tcm_orgName)), params: {data: 'medical/tcmDetailMenu'}});
			reloadTrueOrFalse(isExists,guid,orgName);
			tcm_guid=guid;//给全局变量赋值
			tcm_orgName=orgName;//判断是否存在
		}
	}
}

//判断历史的中医馆的tab页是否存在
function checkIsExists(guid,orgName){
	orange.setPageContext(orgName, {'data':'medical/tcmDetailMenu/'+guid+'/'+orgName});
	return isExists = orange.mainPage.mainTabs.isExists(orgName,'medical/tcmDetailMenu');
}
//根据判断的结果，tab页的处理情况
function reloadTrueOrFalse(isExists,guid,orgName){
	switch (isExists) {
    case 0: orange.mainPage.mainTabs.createTab(orgName,'medical/tcmDetailMenu/'+guid+'/'+orgName,'', true, true, true, true); break;
    case 1: orange.mainPage.mainTabs.createTab(orgName,'medical/tcmDetailMenu/'+guid+'/'+orgName,'', true, true, true, true); break;
    case 2: orange.mainPage.mainTabs.jumpTab(orgName,{name: 'medical/tcmDetailMenu/'+guid+'/'+orgName, params: {data: 'medical/tcmDetailMenu'}}); break;
    default: break;
	}
}