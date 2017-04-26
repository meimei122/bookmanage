<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="resources/css/returnBook.css" />
<script type="text/javascript" src="resources/js/bookManage/returnBook.js"></script>
<title>还书管理</title>
</head>
<body>
	<div id="return_book_div">
		<div id="return_book_toolbar">
			<ul id="toolMenu" class="tool_menu">
				<li><a id="returnBtn"><i class="fa fa-share" aria-hidden="true"></i>还书</a></li>
				<li><input id="book_isbn"  class="booknum" placeholder=" 书 号"/></li>
				<li><input id="sid"  class="booknum" placeholder=" 学 号"/></li>
				<li><button type="button" class="btn btn-info" id="querybtn">查 询</button></li>
			</ul>
	    </div>
		<table id="return_book_table">
	    </table>
	    
	    <!-- 添加修改模态框（Modal） -->
		<div class="modal fade" id="modelTable" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title add" id="myModalLabel">
							图书超期信息
						</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="name">书  号</label>
							<input type="text" class="form-control" id="book_isbnInput" disabled>
						</div>
						<div class="form-group">
							<label for="name">书   名</label>
							<input type="text" class="form-control" id="book_name" disabled>
						</div>
						<div class="form-group">
							<label for="name">学  号</label>
							<input type="text" class="form-control" id="sidInput" disabled>
						</div>
						<div class="form-group">
							<label for="name">超期天数</label>
							<input type="text" class="form-control" id="outDateNum" disabled>
						</div>
						<div class="form-group">
							<label for="name">需要支付金额</label>
							<input type="text" class="form-control" id="pay" disabled>
						</div>
						<div class="form-group">
							<label for="name">实际支付金额</label>
							<input type="text" class="form-control" id="actualPay">
							<i class="message">*实际支付金额与需要支付金额不匹配!</i>
						</div>	
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭
						</button>
						<button type="button" class="btn btn-primary" id="save" data-dismiss="modal">
							保存
						</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</body>
</html>