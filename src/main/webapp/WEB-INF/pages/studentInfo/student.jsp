<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="resources/css/student.css">
<script type="text/javascript" src="resources/js/studnetInfo/student.js"></script>
<title>Insert title here</title>
</head>
<body>
	<div id="student_div">
		<div id="student_toolbar">
			<ul id="toolMenu" class="tool_menu">
				<li><a id="restPsw"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>重置学生密码</a></li>
				<li><a id="deleteStudent"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除学生信息</a></li>
				<li><input id="sid_type" class="sidType" placeholder="学  号"/>
				<button type="button" class="btn btn-info" id="querybtn">查 询</button></li>
			</ul>
	    </div>
		<table id="student_table">
	    </table>
	    
	    <!-- 信息删除确认 -->  
		<div class="modal fade" id="delcfmModel">  
		  <div class="modal-dialog">  
		    <div class="modal-content message_align">  
		      <div class="modal-header">  
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>  
		        <h4 class="modal-title">提示信息</h4>  
		      </div>  
		      <div class="modal-body">  
		        <p>您确认要删除吗？</p>  
		      </div>  
		      <div class="modal-footer">  
		         <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>  
		         <button type="button" class="btn btn-primary" id="sure" data-dismiss="modal">确定</button>
		      </div>  
		    </div><!-- /.modal-content -->  
		  </div><!-- /.modal-dialog -->  
		</div><!-- /.modal -->  
	</div>
</body>
</html>