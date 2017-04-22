<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>图书管理系统后台登录</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="resources/css/style.css"/>
<style>
body{height:100%;background:#16a085;overflow:hidden;}
canvas{z-index:-1;position:absolute;}
</style>
<script src="resources/js/plugins/jquery/jquery.min.js" ></script>
<script src="resources/js/plugins/jquery/Particleground.js" ></script>
<script src="resources/js/plugins/jquery/verificationNumbers.js" ></script>
<script>
$(document).ready(function() {
  //粒子背景特效
  $('body').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  //验证码
  createCode();
  //测试提交，对接程序删除即可
  $(".submit_btn").click(function(){
	  var ausername = $("#name").val(),
	  	  apass = $("#psw").val();
	  if(ausername==""||apass==""){
		  $("#errormessage").html("用户名或密码不能为空");
	  }else{
		  $.ajax({
	          url: 'loginCheck',
	          type: 'post',
	          data:{ausername:ausername,apass:apass},
	          cache: true,
	          success: function (data) {
	        	  if(data.param==true){
	        		  window.location.href="index";
	        	  }else{
	        		  $("#errormessage").html("用户名或密码错误");
	        	  }
	          }
	  	   });
	  }
  	});
});
</script>
</head>
<body>
<dl class="admin_login">
 <dt>
  <strong>图书管理后台系统</strong>
  <em>Management System</em>
 </dt>
	<div style="height: 15px;">
		<i id="errormessage" style="font-style: normal;color: #DC143C;height: 112px;"></i>
	</div>
	 <dd class="user_icon">
	  <input type="text" placeholder="账号" class="login_txtbx" id="name"/>
	 </dd>
	 <dd class="pwd_icon">
	  <input type="password" placeholder="密码" class="login_txtbx" id="psw"/>
	 </dd>
	 <dd class="val_icon">
	  <div class="checkcode">
	    <input type="text" id="J_codetext" placeholder="验证码" maxlength="4" class="login_txtbx">
	    <canvas class="J_codeimg" id="myCanvas" onclick="createCode()">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
	  </div>
	  <input type="button" value="验证码核验" class="ver_btn" onClick="validate();">
	 </dd>
	 <dd>
	  <input type="submit" value="立即登陆" class="submit_btn"/>
	 </dd>
</dl>
</body>
</html>