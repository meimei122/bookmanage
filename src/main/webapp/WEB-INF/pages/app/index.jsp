<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript">
  var id = '<%=request.getSession().getAttribute("aid") %>';
  var ausername = '<%=request.getSession().getAttribute("ausername") %>';
</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="resources/css/plugins/bootstrap/bootstrap.css" />
<link rel="stylesheet" href="resources/css/plugins/jquery/jquery-ui.min.css" />
<link rel="stylesheet" href="resources/css/plugins/font-awesomer/font-awesome.min.css" />
<link type="text/css" href="resources/css/plugins/bootstrap/bootstrap-table.css" rel="stylesheet">
<link type="text/css" href="resources/css/plugins/bootstrap/bootstrap-theme.css" rel="stylesheet">
<link type="text/css" href="resources/css/plugins/bootstrap/bootstrapValidator.min.css" rel="stylesheet">
<link type="text/css" href="resources/css/plugins/bootstrap/select2.css" rel="stylesheet"/>
<link type="text/css" href="resources/css/plugins/bootstrap/bootstrap-editable.css" rel="stylesheet"/>
<link rel="stylesheet" href="resources/css/index.css" />
<!-- 弹框部分 -->
<link rel="stylesheet" href="resources/css/plugins/other/mdialog.css" />
<script type="text/javascript" src="resources/js/component/other/zepto.min.js"></script>
<script type="text/javascript" src="resources/js/component/other/mdialog.js"></script>
<title>后台管理系统</title>
</head>
<body id="bg">
<div class="container">

	<div class="leftsidebar_box">
	</div>
	<div class="quit_div">
		<a href="login" class="quit"><span class="glyphicon glyphicon-off" aria-hidden="true"></span>退出</a>
	</div>
	<div id="right_content" class="right">
	</div>
</div>

<script type="text/javascript" data-main="resources/js/app/main.js" src="resources/js/component/require/require-2.1.11.js"></script>
</body>
</html>