<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="resources/css/index.css" />
<script type="text/javascript" src="resources/plugins/jquery/jquery.min.js"></script>
<script type="text/javascript" src="resources/js/app/index.js"></script>
<title>后台管理系统</title>
</head>
<body id="bg">

<div class="container">

	<div class="leftsidebar_box">
		
		<dl class="system_log">
			<dt>图书管理<img src="resources/images/left/select_xl01.png"></dt>
			<dd class="first_dd"><a href="#">还书管理</a></dd>
			<dd><a href="#">添加图书信息</a></dd>
			<dd><a href="#">修改图书信息</a></dd>
			<dd><a href="#">删除图书信息</a></dd>
		</dl>
	
		<dl class="custom">
			<dt>学生信息管理<img src="resources/images/left/select_xl01.png"></dt>
			<dd class="first_dd"><a href="#">重置学生密码</a></dd>
			<dd><a href="#">删除学生信息</a></dd>
		</dl>
	
		<dl class="app">
			<dt>个人信息管理<img src="resources/images/left/select_xl01.png"></dt>
			<dd class="first_dd"><a href="#">修改密码</a></dd>
		</dl>
	
		<dl class="statistics">
			<dt>统计分析<img src="resources/images/left/select_xl01.png"></dt>
			<dd class="first_dd"><a href="#">图书信息统计</a></dd>
		</dl>
	
	</div>

</div>
<script type="text/javascript" data-main="resources/js/app/main.js" src="resources/plugins/require/require-2.1.11.js"></script>
</body>
</html>