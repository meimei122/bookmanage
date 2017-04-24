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
				<li><a id="addBook" data-toggle="modal" data-target="#modelTable"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>添加图书信息</a></li>
				<li><a id="updateBook" data-toggle="modal" data-target="#modelTable"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改图书信息</a></li>
				<li><a id="deleteBook"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除图书信息</a></li>
			</ul>
	    </div>
		<table id="book_manage_table">
	    </table>
	    
	    <!-- 模态框（Modal） -->
		<div class="modal fade" id="modelTable" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title add" id="myModalLabel">
							添加图书信息
						</h4>
						<h4 class="modal-title update" id="myModalLabel">
							修改图书信息
						</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="name">书  号</label>
							<input type="text" class="form-control">
						</div>
						<div class="form-group">
							<label for="name">书   名</label>
							<input type="text" class="form-control">
						</div>
						<div class="form-group">
							<label for="name">作   者</label>
							<input type="text" class="form-control">
						</div>
						<div class="form-group">
							<label for="name">图书类型</label>
							<input type="text" class="form-control">
						</div>
						<div class="form-group">
							<label for="name">图书价格</label>
							<input type="text" class="form-control">
						</div>	
						<div class="form-group">
							<label for="name">总   数</label>
							<input type="text" class="form-control">
						</div>	
						<div class="form-group">
							<label for="name">可借数量</label>
							<input type="text" class="form-control">
						</div>				
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭
						</button>
						<button type="button" class="btn btn-primary add" data-dismiss="modal">
							保存
						</button>
						<button type="button" class="btn btn-primary update" data-dismiss="modal">
							保存
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>