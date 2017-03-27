/**
 * 系统登录脚本
 * 依赖[jquery]
 */
$(function(){
	var e = $(".login-warp");
	var h = Math.ceil(e.height());
	var oh = Math.ceil(e.outerHeight());
	var mt = Math.ceil(oh / 2);	//取得margin-top值
	var w = Math.ceil(e.width());	//取得元素宽度
	var ow = Math.ceil(e.outerWidth());
	var ml = Math.ceil(ow / 2);	//取得margin-left
	e.css({	//实现元素居中效果
		"margin-top": "-" + mt + "px",
		"top": "50%",
		"margin-left": "-" + ml + "px",
		"left": "50%",
		"width":w,
		"height":h,
		"position": "absolute"
	}); 
});	
function register() {
	window.open("registry", "_blank");
}
function retrievePassword(){
	window.open("retrievePassword", "_blank");
}
