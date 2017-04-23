<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/bookManage.css" />
<script type="text/javascript" src="resources/js/bookManage/bookManage.js"></script>
</head>
<body>
	<div id="book_manage_div">
		<div id="book_manage_toolbar">
			<ul id="toolMenu" class="tool_menu">
				<li><a id="addBook"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>添加图书信息</a></li>
				<li><a id="updateBook"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改图书信息</a></li>
				<li><a id="deleteBook"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除图书信息</a></li>
			</ul>
	    </div>
		<table id="book_manage_table">
	    </table>
	</div>
</body>
</html>